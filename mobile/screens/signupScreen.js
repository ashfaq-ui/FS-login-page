import react  from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native' ;

function signupScreen() {
    return(
        <View style={styles.container}>
            <View style={styles.signupArea}>
                <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>Sign Up</Text>
                <TextInput
                    styles={styles.input}
                    placeholder= 'Name'
                    placeholderTextColor= 'black'
                />

                <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>Email</Text>
                <TextInput 
                    styles={styles.input}
                    keyboardType='email-address' 
                    placeholder= 'Email'
                    placeholderTextColor= 'black'
                />

                <Text style={{color: 'black', fontSize: 30, textAlign: 'center'}}>Password</Text>
                <TextInput 
                    styles={styles.input}
                    placeholder= 'Password'
                    placeholderTextColor= 'black'
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={{color: 'white', fontSize: 20}}>Sign Up</Text>
                </TouchableOpacity> 
                               
                    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    signupArea: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,     
    }
});         