import React from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native' 
import SelectMultiple from 'react-native-select-multiple';
import FoodService from '../Services/FoodService'
import { useState, useEffect } from 'react';

function ManualScreen({ navigation }) {

    const [foods, setFoods] = useState([]);
    const [selectedFoods, setSelectedFoods] = useState([]);

    useEffect(() => {
      if (foods.length == 0) {
        getFoods();
      }
    }, []);

    const getFoods = async () => {
      let foodService = new FoodService();
      let foods = await foodService.get_all_foods();
      setFoods(foods);
    };

    return (
      <View style={styles.container}>
        <View style={styles.section1}>
          <Text style={{fontSize: 30, color: '#ffffff'}}>
            Manual Entry
          </Text>
        </View>
        <View style={{flex: 1, width: '80%', marginBottom: 40}}>
          <Text style={{fontSize: 30, color:"white", marginTop: 10, marginBottom: 50}}>Select foods: </Text>
            <SelectMultiple
              items={foods}
              selectedItems={selectedFoods}
              onSelectionsChange={(selections, item) => {setSelectedFoods(selections)}}
              style={styles.multiSelect}
            />
          <FlatList style={{maxHeight: 125}}
            data={selectedFoods}
            renderItem={({item}) => <Text style={styles.selectedFoods}>{item.value}</Text>}
          />
      </View>
        <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 100}}>
          <View style={styles.button}>
            <Button color='white' title="Cancel" onPress={() => navigation.navigate('Home')} />
          </View>
          <View style={styles.button}>
            <Button color='white' title="Done"
	            onPress={() => {
                if (selectedFoods.length === 0) {
                  alert("Please select at least one food")
                } else {
                  navigation.navigate('ManualResults', { paramKey: selectedFoods })}}}
	          />
          </View>
        </View>
    </View>
    );
  }

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
    paddingHorizontal: 100
  },
  button: {
    borderColor: '#c5d1d8', 
    borderWidth: 2, 
    borderRadius: 1, 
    marginHorizontal: 20, 
    padding: 5
  },
    section: {
      marginBottom: 30,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    multiSelect: {
      height: 200,
      marginBottom: 20,
      backgroundColor: '#000'
    },
    selectedFoods: {
      color: "#aaa",
      fontSize: 17,
      marginBottom: 3
    },
  });

export default ManualScreen;
