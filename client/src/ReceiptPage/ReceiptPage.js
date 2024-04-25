import React from 'react';
import { Text, StyleSheet, Button, View, Image } from "react-native"; 


const ReceiptPage = ({ navigation }) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
        navigation.navigate('VirtualPantry');
        // You can perform any action you want here
      };

    return (
        <View>
          <View>
            <Text>Receipts</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderWidth: 1,
              margin: 10
            }}
          />
          <Image
            source={require('../../assets/Dubs_Story_Image.jpg')}
            style={styles.image}
          />
          <Button onPress={handleButtonClick} title="Click me!" color="blue" />
        </View>
    )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  image: {
    width: 200,
    height: 200,
  }

});

export default ReceiptPage;
