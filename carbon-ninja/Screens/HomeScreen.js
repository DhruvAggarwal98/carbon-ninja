import React from 'react';
import { View, Text, Button} from 'react-native' 

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

export default HomeScreen;