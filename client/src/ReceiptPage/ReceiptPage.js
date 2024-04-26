import React from 'react';
import { Text, StyleSheet, Button, View, Image } from "react-native"; 
import ReceiptCard from '../Common/Cards/Receipt/ReceiptCard';
// import { useRouter } from 'expo-router'
import styles from './ReceiptPage.style'


const ReceiptPage = ({ navigation }) => {
    const handleButtonClick = () => {
        console.log("Button clicked!");
        navigation.navigate('VirtualPantry');
        // You can perform any action you want here
      };

    return (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Receipts</Text>
          </View>
          <View
            style={{
              borderColor: '#F2555A',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderWidth: 1,
              margin: 10
            }}
          />

          <View style={styles.container}>
            <ReceiptCard
                storeName={"Safeway"}
                date={"11 Jan 2023, 4:57 am"}
                numItems={4}
                // handleNavigate={() => router.push(``)}
            /> 
            <ReceiptCard
                storeName={"Safeway"}
                date={"11 Jan 2023, 4:57 am"}
                numItems={4}
                // handleNavigate={() => router.push(``)}
            /> 
          </View>
          <Image
            source={require('../../assets/Dubs_Story_Image.jpg')}
            style={styles.image}
          />
          <Button onPress={handleButtonClick} title="Click me!" color="blue" />
        </View>
    )
}

// const styles = StyleSheet.create({
//   text: {
//     color: 'black',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   }

// });

export default ReceiptPage;
