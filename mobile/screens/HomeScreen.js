import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

function HomeScreen({ navigation }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (studentId && password) {
      // Example: navigate after login
      navigation.navigate('Signup');
    } else {
      alert('Please enter both fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
        <Text style={styles.title}>Student ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Student ID"
          placeholderTextColor="black"
          value={studentId}
          onChangeText={setStudentId}
        />

        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('Signup')}
        />
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
  title: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default HomeScreen;
