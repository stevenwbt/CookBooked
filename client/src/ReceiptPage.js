import React from 'react';
import { Text, StyleSheet, Button, View } from "react-native"; 

const ReceiptPage = ({ navigation }) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
        navigation.navigate('VirtualPantry');
        // You can perform any action you want here
      };

    return (
        <View>
        <Text style={styles.text}>
            ReceiptPage.
        </Text>
        <Button onPress={handleButtonClick} title="Click me!" color="blue" />
        </View>
    )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default ReceiptPage;
