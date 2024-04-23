import React from 'react';
import { Text, StyleSheet, Button, View } from "react-native"; 

const VirtualPantry = ({ navigation }) => {

    return (
    <View>
        <Text style={styles.text}>
        VirtualPantry.
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default VirtualPantry;
