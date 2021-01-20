import React, { useState, useRef } from 'react';
import { Button, KeyboardAvoidingView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Custom imports
import styles from './styles/App.Style.js';
import { ValidateStr } from './utils/ValidateStr.js';

// Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  // Handler functions
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

  // Contacts
  const [contactStr, setContactStr] = useState('');
  const contactInputRef = useRef(null);

  // Navigation screens
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
          <TouchableHighlight style={styles.contactListItem}
                              onPress={() => { navigation.navigate('Details') }}>
            <Text>Contact Info</Text>
          </TouchableHighlight>
        </View>
  
        <View style={styles.btnFlexRowContainer}>
          <Button title="Manage" onPress={() => { navigation.navigate('Manage') }}>
          </Button>

          <Button title="Chat" onPress={() => { navigation.navigate('Chat') }}>
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  };

  const DetailsScreen = ({ navigation }) => {
    return (
      <View style={styles.mainContainer}>
        <Text>Details Screen</Text>
  
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>    
    );
  };

  const ManageScreen = ({ navigation }) => {
    return (
      <View style={styles.mainContainer}>
        <Text>Update Screen</Text>
  
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>    
    );
  };
  
  const ChatScreen = ({ navigation, route }) => {
    return (
      <View style={styles.mainContainer}>
        <GiftedChat />
      </View>
    );
  };
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
                      component={HomeScreen}
                      options={{ title: 'Home' }} />

        <Stack.Screen name="Details"
                      component={DetailsScreen}
                      options={{ title: 'Display Details' }} />

        <Stack.Screen name="Manage"
                      component={ManageScreen}
                      options={{ title: 'Account Management' }} />

        <Stack.Screen name="Chat" 
                      component={ChatScreen} 
                      options={{ title: 'Chat' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
