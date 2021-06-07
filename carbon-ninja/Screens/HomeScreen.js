import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native' 

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style= {{ fontSize: 30, color: "#19e7f7"}}>
            Welcome [user]!
          </Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={{fontSize: 30, color:"white", marginTop: 30}}>
            CO2 Emission Stats:
          </Text>
          <View style={styles.sectionText}>
            <Text style={{color: '#66fcf1', fontSize: 18}}>
              This week: 46kg
            </Text>
            <Text style={{color: '#66fcf1', fontSize: 18}}>
              All Time: 3000kg
            </Text>
            <Text style={{color: '#66fcf1', fontSize: 18}}>
              Avg per meal: 23kg
            </Text>
          </View>
        </View>
        <View style={[styles.componentSection, styles.sectionLarge]}>
          {/* <Text style={{fontSize: 30, color:"white", marginTop: 30}}>
            Get Carbon Estimates:
          </Text> */}
          <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={{borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3, marginHorizontal: 20, padding: 5}}>
              <Button color='white' title="Manual" onPress={() => navigation.navigate('Manual')}/>            
            </View>
            <View style={{borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3, marginHorizontal: 20, padding: 5}}>
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
