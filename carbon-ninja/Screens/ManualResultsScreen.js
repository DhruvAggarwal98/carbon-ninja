import {FOODS_API_BASE_URL} from '@env'
import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text, Button, FlatList} from 'react-native' 
import FoodService from '../Services/FoodService'
import { useState, useEffect } from 'react';

var total;

function ManualResultsScreen({ route, navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [emissions, setEmissions] = useState({});


    useEffect(() => {
      total = 0;
      var foods = [];
      obj = route.params.paramKey
      var o;
      for (o in obj) {
	      var food = obj[o];
        var foodName = food.value;
	      foods.push(foodName);
      }
      var jsonbody = '{ "foods" : ' + JSON.stringify(foods) + ' }' // format body for endpoint

      // hit emissions endpoint and return dictionary of {food, emissions}
      fetch(FOODS_API_BASE_URL + '/emissions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: jsonbody
      }).then((response) => response.json())
        .then((data) => { 
          setEmissions(Object.entries(data))
          for (const [food, emiss] of Object.entries(data)) {
            total = total + emiss;
          }
          total = Math.round(total);
        })                     // turn python dict into array of arrays to index easier
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      },
    []);  

       

    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style= {{ fontSize: 30, color: "#66fcf1"}}>
            CO2 Emission Results
          </Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={{fontSize: 30, color:"white", marginTop: 30, marginBottom: 5}}>
            Results:
          </Text>
          <View style={styles.sectionText}>
            <FlatList
            data={emissions}
            renderItem={ ({item} ) => (                                          // item => [food, emission]
	          <Text style={styles.emissions}>{item[0]}: <Text style={{color: "white" }}> {item[1]} kg </Text> </Text>)}
            />
          </View>
          <Text style={{fontSize: 25, color:"white", marginTop: 30, marginBottom: 5}}>
            Total: {total} kg
          </Text>
        </View>
        <View style={[styles.componentSection, styles.sectionLarge]}>
          <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={{ borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3, marginHorizontal: 20, padding: 5}}>
              <Button color='white' title="Back" onPress={() => navigation.navigate('Manual')} />
            </View>
            <View style={{borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3, marginHorizontal: 20, padding: 5}}>
              <Button color='white' title="Done" onPress={() => navigation.navigate('Home')} />            
            </View>
          </View>
        </View>
    </View>
    );
	
  }

export default ManualResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#1f2833'
  },
  componentsSection: {
      backgroundColor: '#1f2833',
      paddingHorizontal: 16,
      paddingVertical: 24,
      marginBottom: 20,
      borderRadius: 5,
      borderColor: '#c5c6c7',
      borderWidth: 4
    },
  textStyle: {
    borderWidth: 3,
    borderColor: '#c5c6c7'
  },
  buttonStyle: {
    borderColor: '#66fcf1',
    borderWidth: 4,
    padding: 10,
    marginBottom: 60,
    marginHorizontal: 20,
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  emissions: {
    color: "#66FDF1",
    fontSize: 18
  },	
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleSection: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#c5c6c7'
  },
  sectionText: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  sectionLarge: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  }
});

// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      //   <Button
      //     title="Enter Data Manually"
      //     onPress={() => navigation.navigate('Manual')}
      //   />
      //   <Button
      //     title="Enter data from Camera"
      //     onPress={() => navigation.navigate('Camera')}
      //   />
      // </View>
