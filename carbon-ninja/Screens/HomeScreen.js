import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'
import { useState, useEffect } from 'react';
import {FOODS_API_BASE_URL} from '@env'
import { useAuth } from '../contexts/Auth';

var total;
var num;

function HomeScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [totalEmissions, setTotalEmissions] = useState();
    const [avgEmissions, setAvgEmissions] = useState();
    const auth = useAuth();

    useEffect(() => {
      total = 0.0;
      num = 0;
      // grab signed in user's id and fetch emissions
      fetch(FOODS_API_BASE_URL + '/users/' + auth.authData.uid + '/emissions', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      }).then((response) => response.json())
        .then((data) => {
          for (const entry in data) {
            total += data[entry][0];
            num += 1;
          }
            setTotalEmissions(total.toFixed(2));
            setAvgEmissions((total / num).toFixed(2));
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      },
    []);

    return (
      <View style={styles.container}>
        <View style={styles.section1}>
          <Text style= {{ fontSize: 30, color: "#fff", fontWeight: "bold"}}>
            Welcome to Carbon Ninja!
          </Text>
          <Text style= {{ fontSize: 15, color: "#aaa", marginTop: 7, alignSelf: "center"}}>
            The carbon footprint calculator
          </Text>
        </View>
        <View style={styles.section2}>
          <Text style={{fontSize: 30, color:"white", marginTop: 60}}>
            Your stats:
          </Text>
          <View style={{flex: 1, textAlign: 'left'}}>
            <Text style={{color: '#aaa', fontSize: 18, marginBottom: 10}}>
              All Time: { totalEmissions } kg
            </Text>
            <Text style={{color: '#aaa', fontSize: 18, marginBottom: 10}}>
              Avg per meal: { avgEmissions } kg
            </Text>
          </View>
        </View>
        <View style={styles.section3}>
          <Text style= {{ fontSize: 30, color: "#fff", marginBottom: 30}}>
            Calculate Carbon Emissions:
          </Text>
          <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={styles.button}>
              <Button color='white' title="Manual" onPress={() => navigation.navigate('Manual')}/>            
            </View>
            <View style={styles.button}>
              <Button color='white' title="Camera" onPress={() => navigation.navigate('Camera')}/>
            </View>
          </View>
        </View>
    </View>
    );
  }

export default HomeScreen;

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
    paddingBottom: 40
  },
  section2: {
    flex: 1, 
    justifyContent: 'space-between', 
    borderBottomColor: 'aqua', 
    borderBottomWidth: 1, 
    marginBottom: 40, 
    paddingHorizontal: 100
  },
  section3: {
    flex: 1, 
    alignItems: 'center', 
    marginTop: 20
  },
  button: {
    borderColor: '#c5d1d8', 
    borderWidth: 2, 
    borderRadius: 1, 
    marginHorizontal: 20, 
    padding: 5
  }
});

