import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native' 
import { Picker } from '@react-native-picker/picker'; 

function ManualScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <View style={styles.section}>
         <Text style={{fontSize: 30, color: '#ffffff'}}>
          Manual Entry
        </Text>
      </View>
      <View style={styles.componentsSection}>
          <Text style={styles.componentSectionHeader}>Select food: </Text>
          <Picker>
            <Picker.Item color="white" label="Bread" value="Bread" />
            <Picker.Item color="white" label="Rice" value="Rice" />
          </Picker>
          <View style={styles.buttonStyle}>
              <Button color='white' title="Add item" />
          </View>
        </View>
        <View style={{ flexDirection:"row", alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20}}>
          <View style={{ borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3}}>
            <Button color='white' title="Cancel" onPress={() => navigation.navigate('Home')} />
          </View>
          <View style={{borderColor: '#66FDF1', borderWidth: 2, borderRadius: 3}}>
            <Button color='white' title="Done" />
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