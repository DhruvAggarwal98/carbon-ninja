import {FOODS_API_BASE_URL} from '@env'
import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text, Button, FlatList} from 'react-native' 
import FoodService from '../Services/FoodService'
import { useState, useEffect } from 'react';

var total;

function CameraResultsScreen({ route, navigation }) {
    var total = 0;
    let foods = Object.entries(JSON.parse(route.params.paramKey));

    for (const [food, emiss] of foods) {
        total = total + emiss;
    }
    total = total.toFixed(1);

    return (
      <View style={styles.container}>
        <View style={styles.section1}>
          <Text style= {{ fontSize: 30, color: "#fff"}}>
            Emission Results
          </Text>
        </View>
        <View style={styles.section2}>
          <Text style={{fontSize: 30, color:"white", marginTop: 20, marginBottom: 20}}>
            Results:
          </Text>
          <View style={{flex: 1}}>
            <FlatList
              data={foods}
              renderItem={ ({item} ) => (                                         
	          <Text style={{color: '#aaa', fontSize: 18, marginBottom: 10}}>{item[0]}: <Text style={{color: "white" }}> {item[1]} kg </Text> </Text>)}/>
          </View>
          <Text style={{fontSize: 25, color:"white", marginTop: 30, marginBottom: 40}}>
            Total: {total} kg
          </Text>
        </View>
        <View style={{flex: 1}}>
          <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={styles.button}>
              <Button color='white' title="Back" onPress={() => navigation.navigate('Manual')} />
            </View>
            <View style={styles.button}>
              <Button color='white' title="Done" onPress={() => navigation.navigate('Home')} />            
            </View>
          </View>
        </View>
    </View>
    );
	
	
  }

export default CameraResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#181818'
  },
  section1: {
    flex: 0, 
    marginTop: 50, 
    borderBottomColor: 'aqua', 
    borderBottomWidth: 1, 
    marginBottom: 30, 
    paddingBottom: 40, 
    paddingHorizontal: 80
  },
  section2: {
    flex: 1, 
    justifyContent: 'space-between', 
    borderBottomColor: 'aqua', 
    borderBottomWidth: 1, 
    marginBottom: 40, 
    paddingHorizontal: 110
  },
  button: {
    borderColor: '#c5d1d8', 
    borderWidth: 2, 
    borderRadius: 1, 
    marginHorizontal: 20, 
    padding: 5
  },
});