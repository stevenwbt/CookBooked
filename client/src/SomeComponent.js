import React from 'react';
import { Text, StyleSheet, Button, View } from "react-native"; 

const SomeComponent = ({ navigation }) => {
  let number = 100;

  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigation.navigate('Home');
    // You can perform any action you want here
  };

  return (
    <View>
      <Text style={styles.text}>
        This is a component.
        I can display data, {number}, using curly brackets!
      </Text>
      <Button onPress={handleButtonClick} title="Click me!" color="blue" />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  }
});

export default SomeComponent;
