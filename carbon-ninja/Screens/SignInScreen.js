import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, Button, Text, View, TextInput} from 'react-native';

import {useAuth} from '../contexts/Auth';

function SignInScreen ({navigation}) {
  const [loading, isLoading] = useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn(username, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold"}}>Sign In</Text>
      </View>
      <View>
        <TextInput 
          placeholder="Enter Username" 
          placeholderTextColor = "#c5d1d8"
          value={username}
          onChangeText={setUsername}
          style={{color: 'white', paddingHorizontal: 70, margin: 10, height: 40, borderColor: '#c5d1d8', borderWidth: 1}} />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          placeholderTextColor = "#c5d1d8"
          value={password}
          onChangeText={setPassword}
          style={{color: 'white', paddingHorizontal: 70, margin: 10, height: 40, borderColor: '#c5d1d8', borderWidth: 1}}
          />
      </View>
          <View style={styles.button}>
            <Button color='white' title="Sign In" onPress={() => signIn({ username, password })} />
          </View>
        <View style={{marginTop: 50}}>
          <Button color='white' title="Create an Account" onPress={() => navigation.navigate('CreateAccountScreen')} />
        </View>
    </View>
  );
};
export default SignInScreen;

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
    paddingHorizontal: 125,
    marginBottom: 40, 
    paddingBottom: 40
  },
  button: {
    borderColor: '#c5d1d8', 
    borderWidth: 2, 
    borderRadius: 1, 
    marginHorizontal: 20, 
    padding: 5, 
    marginTop: 50
  }
});