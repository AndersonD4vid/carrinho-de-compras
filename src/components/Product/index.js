import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Product({data, addToCart}){
  return(
  <View style={styles.containerProduto}>
    <View>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.price}>R$ {data.price}</Text>
    </View>

    <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  containerProduto: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderRadius: 6,
    marginBottom: 14,
    padding: 15,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
  price: {

  },
  buttonAdd: {
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#168fff',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  }
  
});