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
      <View style={styles.section}>
         <Text style={{fontSize: 30, color: '#ffffff'}}>
          Manual Entry
        </Text>
      </View>
      <View style={styles.componentsSection}>
          <Text style={styles.componentSectionHeader}>Select food: </Text>
          <SelectMultiple
            items={foods}
            selectedItems={selectedFoods}
            onSelectionsChange={(selections, item) => {setSelectedFoods(selections)}}
            style={styles.multiSelect}
          />
          <FlatList
            data={selectedFoods}
            renderItem={({item}) => <Text style={styles.selectedFoods}>{item.value}</Text>}
          />
      </View>

        <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20}}>
          <View style={{ borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3}}>
            <Button color='white' title="Cancel" onPress={() => navigation.navigate('Home')} />
          </View>
          <View style={{borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3}}>
            <Button color='white' title="Done"
	            onPress={() => 
	              navigation.navigate('ManualResults', { paramKey: selectedFoods }
	            )}
	          />
          </View>
        </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2833',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    buttonStyle: {
      borderColor: '#66FDF1',
      borderWidth: 2,
      borderRadius: 3
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
    multiSelect: {
      maxHeight: 200,
      marginBottom: 20
    },
    selectedFoods: {
      color: "#66FDF1"
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
      // fontFamily: fonts.primaryRegular,
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

export default ManualScreen;

// 'rgba(198, 199, 200, 0.1)'
