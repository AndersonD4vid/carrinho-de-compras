import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import CartProvider, { CartContext } from '../../contexts/CartContext';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Product from '../../components/Product';

export default function Home(){
  const {cart, addItemCart} = useContext(CartContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 9.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '3',
      name: "Queijo 500g",
      price: 15.00
    },
    {
      id: '4',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '5',
      name: "Guarana lata",
      price: 6.50
    },
  ]);

  function handleAddCart(item){
    addItemCart(item);
  }

  return(
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity style={styles.cartButton}>
         {cart.length >= 1 && (
          <View style={styles.dot}>
            <Text style={styles.dotText}>
              {cart?.length}
            </Text>
         </View>
         )}
         <Feather 
         onPress={() => navigation.navigate("Cart")}
         name="shopping-cart" 
         size={30} 
         color="#333" /> 
        </TouchableOpacity>
      </View>

      <FlatList 
      style={styles.list}
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <Product data={item} addToCart={() => handleAddCart(item)} />}
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingEnd: 20,
    paddingStart: 20,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItemsce: 'center',
    marginTop: 24,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 20,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 13,
    color: '#fff'
  }
  
});