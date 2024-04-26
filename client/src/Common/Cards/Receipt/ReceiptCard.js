import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './ReceiptCard.style'


const ReceiptCard = ({ storeName, date, numItems, handleNavigate }) => {
    // console.log("Rendering ReceiptCard", storeName, date, numItems);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/receipts/receipt1.jpeg')}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>  

      <View style={styles.textContainer}>
        <Text style={styles.store} numberOfLines={1}>
            {storeName}
        </Text>

        <Text style={styles.date}>{date}</Text>
        
        <Text style={styles.numItems}>{numItems} items detected.</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ReceiptCard