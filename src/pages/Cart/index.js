import React, {useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {CartContext} from '../../contexts/CartContext';
import CartItem from '../../components/CartItem';

export default function Cart(){
  const {cart, addItemCart, removeItemCart, total} = useContext(CartContext);
  return(
  <View style={styles.mainContainer}>
    <FlatList
      data={cart}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item.id) }
      ListEmptyComponent={() => 
      <>
        <Text 
          style={{
          textAlign: 'center', 
          fontSize: 18, 
          color: '#777',
          marginBottom: 15
          }}>
          Nenhum item no carrinho
        </Text>
        
        <Feather 
          style={{
          textAlign: 'center', 
          }}
          name="meh" 
          size={30} 
          color="#777" /> 
      </>
      }

      renderItem={({item}) => (
        <CartItem 
        data={item} 
        addAmount={() => addItemCart(item)} 
        removeAmount={() => removeItemCart(item)}
        />
      )}
      // Renderiza sempre como o ultimo item da sua lista
      ListFooterComponent={() => cart.length >= 1 && (<Text style={styles.total}>Total: R$ {total}</Text>)}
    />
   </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingEnd: 20,
    paddingStart: 20,
    paddingTop: 14,
    paddingEnd: 14
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  }
  
});