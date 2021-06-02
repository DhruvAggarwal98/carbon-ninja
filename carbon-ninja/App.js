import React,{useState, useEffect, useRef} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker'; 
import { Camera } from 'expo-camera';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Enter Data Manually"
        onPress={() => navigation.navigate('Manual')}
      />
      <Button
        title="Enter data from Camera"
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}


function ManualScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.section}>
      <Text size={30} color="#19e7f7">
        Manual Entry
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
    <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Select food: </Text>
        <Picker style={{ width: '100%', alignSelf: 'center', color: '#66fcf1' }}>
          <Picker.Item label="Bread" value="Bread" />
          <Picker.Item label="Rice" value="Rice" />
        </Picker>
        <View style={styles.buttonStyle}>
            <Button title="Add item" />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.buttonStyle}>
            <Button title="Done" />
        </View>
      </View>
  </View>
  );
}

function CameraScreen({ navigation }){

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
  }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync();
              console.log('photo', photo);
            }
          }}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:"50%",
               borderColor: 'white',
               height: 50,
               width:50,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:"50%",
                 borderColor: 'white',
                 height: 40,
                 width:40,
                 backgroundColor: 'white'}} >
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );

}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manual" component={ManualScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5C6C7',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  buttonStyle: {
    borderColor: '#66FDF1',
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



export default App;