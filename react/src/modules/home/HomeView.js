import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { Button } from 'react-native-paper';

export default function HomeScreen({ isExtended, setIsExtended }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      
        <View style={styles.section}>
          <Text size={30} color="#19e7f7">
            Welcome [user]!
          </Text>
        </View>
        <View style={styles.section}>
          <Text size={30} bold white style={styles.title}>
            CO2 Emission Stats:
          </Text>
        </View>
        <View style={styles.sectionText}>
          <Text color="#66FCF1" size={18}>
            This Week: 30kg
          </Text>
          <Text color="#66FCF1" size={18}>
            All Time: 3000kg
          </Text>
          <Text color="#66FCF1" size={18}>
            Avg per meal: 23kg
          </Text>
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
            <Button color="#ffffff">Manual</Button>
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
    alignItems: 'center',
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
    flex: 2,
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
