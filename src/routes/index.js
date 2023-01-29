import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import {CartContext} from '../contexts/CartContext';

const Stack = createNativeStackNavigator();

export default function Routes(){
  const {total} = useContext(CartContext);

  return(
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
      />
      
      <Stack.Screen
      name="Cart"
      component={Cart}
      options={{
        headerTitle: 'Meu carrinho'
        // headerTitle: `Meu carrinho: R$ ${total}` Testando haha
      }}
      />
    </Stack.Navigator>
  )
}


