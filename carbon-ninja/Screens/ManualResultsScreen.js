import {FOODS_API_BASE_URL} from '@env'
import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text, Button, FlatList} from 'react-native' 
import FoodService from '../Services/FoodService'
import { useState, useEffect } from 'react';

function ManualResultsScreen({ route }) {

    const [isLoading, setLoading] = useState(true);
    const [emissions, setEmissions] = useState({});

    useEffect(() => {
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
        .then((data) => setEmissions(Object.entries(data)))                     // turn python dict into array of arrays to index easier
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      },
    []);     

    return (
      <View style={styles.componentsSection}>
          <Text style={styles.componentSectionHeader}>Emission Results: </Text>
	    <FlatList
            data={emissions}
            renderItem={ ({item} ) => (                                          // item => [food, emission]
	      <Text style={styles.emissions}>{item[0]} {item[1]} </Text>
	    )}
          />
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
    color: "#66FDF1"
  },	
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleSection: {
    flex: 1,
    paddingHorizontal: 20,
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
    borderBottomWidth: 1,
    borderBottomColor: '#C5C6C7'
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
