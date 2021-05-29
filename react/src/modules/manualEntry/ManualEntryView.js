// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, fonts } from '../../styles';

import { Dropdown } from '../../components';
import { Text } from '../../components/StyledText';
import { Button } from 'react-native-paper';

import FoodService from '../../services/FoodService'
import { useState, useEffect } from 'react';

export default function () {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (foods.length == 0) {
      getFoods();
    }
  }, []);

  const getFoods = async () => {
    let foodService = new FoodService();
    let foods = await foodService.get_all_foods()
    setFoods(foods);
  };

  return (
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
            onSelect={() => {}}
            items={foods}
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
}

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
