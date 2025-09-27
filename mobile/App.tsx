import { StatusBar, StyleSheet, useColorScheme, View , Text, TextInput} from 'react-native';

function App() {
  

  return (
    
      
      <AppContent />
    
  );
}

function AppContent() {
  

  return (
    <View style={styles.container}>
      <View style={styles.userArea}>
          <Text style={{ color: "white", fontSize: 30, textAlign: 'center'}}>User id</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="blue"

          />
          <Text style={{ color: "white", fontSize: 30, textAlign: 'center'}}>password</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="blue"

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
    backgroundColor: 'grey',
    padding: 10,
    
  },

  input: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: 'white',
  }

  
});

export default App;
