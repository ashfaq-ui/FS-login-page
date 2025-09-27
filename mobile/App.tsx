import { StyleSheet, TouchableOpacity , View , Text, TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
 
import LoginScreen from './screens/LoginScreen';

function App() {
  

  return (
    
      
      <AppContent />
    
  );
}

function AppContent() {
  

  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
          <Text style={{ color: "black", fontSize: 30, textAlign: 'center'}}>Student ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Student ID"
            placeholderTextColor="black"

          />
          <Text style={{ color: "black", fontSize: 30, textAlign: 'center'}}>password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="black"

          />


          <TouchableOpacity style={styles.loginButton}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("LoginScreen")}>
            <Text style={styles.link}>Go to Login Page</Text>
          </TouchableOpacity>
          


            
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    

  },

  userArea: {
    
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: 'black',
  },

  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10 ,
  },
  link: {
    textAlign: 'center',
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },

  
});

export default App;
