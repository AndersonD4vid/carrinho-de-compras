import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CartItem({data, addAmount, removeAmount}){
  const [amount, setAmount] = useState(data?.amount)

  function handleIncrease(){
    addAmount();
    setAmount(item => item +1);
  }

  function handleDecrease(){
    removeAmount();
    if(amount === 0){
      setAmount(0);
      return;
    }

    setAmount(item => item  -1);
  }


  return(
  <View style={styles.containerItem}>
    <View>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.price}>R$ {data.price}</Text>
    </View>

    <View style={styles.amountContainer}>
      <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
        <Text style={styles.buttonAddText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.amount}>{amount}</Text>

      <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
        <Text style={styles.buttonAddText}>+</Text>
      </TouchableOpacity>
    </View>

   </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderRadius: 6,
    marginBottom: 14,
    padding: 15,
    paddingBottom: 14,
    paddingTop: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonAdd: {
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#168fff',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
  buttonAddText: {
    color: '#fff'
  },
  amount: {
    marginLeft: 15,
    marginRight: 15,
  }
  
});