// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/tabs/Home';
// import Add from './src/tabs/Add';
// import Pantry from './src/tabs/Pantry';
// import Search from './src/tabs/Search';
// import Receipts from './src/tabs/Receipts';

// const Stack = createNativeStackNavigator(); 

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* <Stack.Screen
//           name="navbar" // You can name it whatever you want
//           component={TabNavigation} // Render the bottom tab navigation
//           options={{ headerShown: false }} // Hide the header bar
//         /> */}
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import { Redirect } from 'expo-router';

const StartPage = () => {
  return <Redirect href="/home" />;
}

export default StartPage;