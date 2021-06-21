import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, Button, Text, View, TextInput} from 'react-native';

import {useAuth} from '../contexts/Auth';

function CreateAccountScreen ({navigation}) {
  const [loading, isLoading] = useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  
  const auth = useAuth();
  const createAccount = async () => {
    isLoading(true);
    await auth.createAccount(username, password);
    // isLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold"}}>Create Account</Text>
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
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor = "#c5d1d8"
          value={password2}
          onChangeText={setPassword2}
          style={{color: 'white', paddingHorizontal: 70, margin: 10, height: 40, borderColor: '#c5d1d8', borderWidth: 1}}
        />
      </View>
        
          <View style={styles.button}>
            <Button color='white' title="Create Account" onPress={() => {
                if (password != password2) {
                    alert("Passwords don't match")
                } else if (password.length === 0 | password2.length === 0 | username.length === 0) {
                    alert("Please complete all sections.")
                } else {
                //change to create account not sign in
                createAccount({ username, password })}}}
                />
          </View>
     
        <View style={{marginTop: 50}}>
          <Button color='white' title="Sign In" onPress={() => navigation.navigate('SignInScreen')} />
        </View>
    </View>
  );
};

export default CreateAccountScreen;

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
    paddingHorizontal: 80,
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