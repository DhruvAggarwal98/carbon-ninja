// @flow
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import { RadioGroup, Dropdown } from '../../components';
import { Text } from '../../components/StyledText';
import { Button } from 'react-native-paper';

type Props = {};

// export function componentDidMount() { 
//   fetch('/foods')
//         .then(res => res.json())
//         .then((data) => {
//           console.log("test")
//           this.setState({ foods: data })
//           // foods = data
//         })
//         // .catch(console.log)
//       };
// getFoods = () => {
//   console.log('running')
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//       console.log(json)
//       // this.setState({
//       //   userValues:json
//       // })
//       return json;
//     })
// }

export default (props: Props) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text size={30} color="#19e7f7">
        Manual Entry
      </Text>
    </View>
    <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Select food: </Text>
        <Dropdown
          style={{ width: '100%', alignSelf: 'center', color: '#66fcf1' }}
          // add what to do on select
          onSelect={() => {
            // console.log("hello world")
          }}
          items={['Bread', 'Beer', 'Rice', 'Potatoes', 'Oatmeal', 'Nuts', 'Peas']}
          // items={ getFoods }
        />
        <View style={styles.buttonStyle}>
            <Button color="#ffffff">Add item</Button>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.buttonStyle}>
            <Button color="#ffffff">Done</Button>
        </View>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBlue,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  buttonStyle: {
    borderColor: colors.aqua,
    borderWidth: 4,
    marginTop: 50,
    marginHorizontal: 100,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    marginBottom: 8,
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
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  demoItem: {
    marginVertical: 15,
  },
});
