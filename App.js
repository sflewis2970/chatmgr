import React, { useState, useRef } from 'react';
import { Button, KeyboardAvoidingView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Custom imports
import styles from './styles/App.Style.js';
import { ValidateStr } from './utils/ValidateStr.js';

const onUpdateContactStr = (updatedStr) => {
  if (updatedStr.length > 0) {
    // Validate updated string
    strResults = ValidateStr(updatedStr);

    if (strResults !== null) {
      setContactStr(updatedStr);
    }
  }
  else {
    setContactStr('');
  }
}

// Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  // Contacts
  const [contactStr, setContactStr] = useState('');
  const contactInputRef = useRef(null);

  const HomeScreen = ({ navigation }) => {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
                            style={styles.mainContainer}>
  
        <View style={styles.searchInputContainer}>
          <TextInput style={styles.searchInput}
                     ref={contactInputRef}
                     value={contactStr}
                     placeholder="Enter contact name"
                     onChangeText={(updatedStr) => onUpdateContactStr(updatedStr)}
          />
        </View>

        <View style={styles.contactListContainer}>
          <TouchableHighlight style={styles.contactListItem}>
            <Text>Update Contact</Text>
          </TouchableHighlight>
        </View>
  
        <View style={styles.btnContainer}>
          <TouchableHighlight>
            <Text style={styles.btnText}>Update Contact</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  };

  const DetailsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
  
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>    
    );
  };
  
  const ChatScreen = ({ navigation, route }) => {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
                            style={styles.mainContainer}>
        <Label text="Chat Label 1"/>
  
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
                      ref={tipPctInputRef}
                      value={tipPctStr}
                      placeholder="Enter tip percentage"
                      onChangeText={(pct) => onChangeTipPct(pct)}
          />
        </View>
  
        <View style={styles.btnContainer}>
          <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Home</Text>
          </TouchableHighlight>
  
          <TouchableHighlight onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Go Back</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  };
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
                      component={HomeScreen}
                      options={{ title: 'Chat Manager' }} />

        <Stack.Screen name="Details"
                      component={DetailsScreen} />

        <Stack.Screen name="Chat" 
                      component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
