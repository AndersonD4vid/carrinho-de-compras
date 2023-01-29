import React from 'react';
import {StyleSheet,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';
import CartProvider from './src/contexts/CartContext';

export default function App() {
  return (
   <NavigationContainer style={styles.mainContainer}>
    <CartProvider>
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
      <Routes />
    </CartProvider>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    
  },
  
});

