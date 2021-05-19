import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Tab from '../navigation/MainTabNavigator.js'
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from 'react-native-paper'; 
import { componentDidMount } from '../manualEntry/ManualEntryView.js'

// var foods;
// const getFoods = async () => {
//     let response = await fetch(
//       '/foods'
//     );
//     let json = await response.json();
//     console.log(json);
//     return json;
//   };

// getFoods = () => {
//   console.log('running')
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//       console.log(json)
//       this.setState({
//         userValues:json
//       })
//     })
// }

export default function HomeScreen(props, { isExtended, setIsExtended }) {
  // function getFoods() { fetch('/foods')
  //       .then(res => res.json())
  //       .then((data) => {
  //         console.log("test")
  //         // this.setState({ foods: data })
  //         foods = data
  //       })
  //       // .catch(console.log)
  //     };

  return (
    <View style={styles.container}>
      
        <View style={styles.section}>
          <Text size={30} color="#19e7f7">
            Welcome [user]!
          </Text>
        </View>
        <View style={styles.middleSection}>
          <Text size={30} bold white style={styles.title}>
            CO2 Emission Stats:
          </Text>
          <View style={styles.sectionText }>
            <Text color="#66FCF1" size={18}>
              This week: 46kg
            </Text>
            <Text color="#66FCF1" size={18}>
              All Time: 3000kg
            </Text>
            <Text color="#66FCF1" size={18}>
              Avg per meal: 23kg
            </Text>
          </View>
        </View>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text bold white hCenter size={30} style={styles.description}>
            {' '}
            Get Carbon Estimates:
          </Text>
          <View style={{ flexDirection:"row" }}>
            <View style={styles.buttonStyle}>
              <Button color="#ffffff">Camera</Button>
            </View>
            <View style={styles.buttonStyle}>
              <Button color="#ffffff" onPress={() => 
              (getFoods, props.navigation.navigate('Manual Entry'))}>
              Manual</Button>
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.greyBlue
  },
  textStyle: {
    borderWidth: 3,
    borderColor: '#c5c6c7'
  },
  buttonStyle: {
    borderColor: colors.aqua,
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
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
