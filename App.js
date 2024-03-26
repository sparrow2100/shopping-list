

import ShoppingLists from './components/ShoppingLists';

//import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function App() {

  //your web app's firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAbENfiAE-Yhe9GDvzT8VZR50uwz042Zpg",
    authDomain: "shopping-list-demo-8dac7.firebaseapp.com",
    projectId: "shopping-list-demo-8dac7",
    storageBucket: "shopping-list-demo-8dac7.appspot.com",
    messagingSenderId: "293086754401",
    appId: "1:293086754401:web:10a591cb9e61fb182e9c20"
  };
  //initialize firebase
  const app = initializeApp(firebaseConfig);

  //initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ShoppingLists"
    >
      <Stack.Screen
        name="ShoppingLists"
        
      >
        {props => <ShoppingLists db={db} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


