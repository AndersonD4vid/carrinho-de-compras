import React, {useState, createContext} from 'react';

export const CartContext = createContext({});

function CartProvider({children}){
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Adicionando itens ao carrinho
  function addItemCart(newItem){
    // Verifica se o mesmo item já estar no seu carrinho, se estiver adiciona +1 quantidade
    const indexItem = cart.findIndex(item => item.id === newItem.id)
    
    // Se ele entrou aqui, quer dizer que temos que adicionar +1 quantidade porque ele já estar na sua lista
    if(indexItem !== -1){
      // pegando toda a lista do carrinho
      let cartList = cart;
       cartList[indexItem].amount = cartList[indexItem].amount + 1;

       // Recalculando o total
       cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
      
       // Repassando o valor atualizado
       setCart(cartList);
       totalResultCart(cartList);
       return; 

    }

    // Se o mesmo item não estiver no carrinho,  adiciona ao carrinho
    let data = {
      // pegando todas as propriedades do item
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    // Pegando todos os produtos que já tem, repassando todos os produtos > "[...products]", adicionando um item a mais na lista:  a data > [...products, data] 
    setCart(products => [...products, data])
    totalResultCart([...cart, data]);
   
  }

  function removeItemCart(product){
    const indexItem = cart.findIndex(item => item.id === product.id);
    
    if(cart[indexItem]?.amount > 1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount -1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

      // atualizando ao valor
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);

  }


  // Resultado total dos itens no carrinho
  function totalResultCart(items){
    let myCart = items;
    let result = myCart.reduce((acomulador, objeto) => {return acomulador + objeto.total}, 0);

    setTotal(result.toFixed(2));
  }

  return(
    <CartContext.Provider 
    value={{
      cart,
      addItemCart,
      removeItemCart,
      total
    }}>
      {/* repassando os componentes */}
      {children}
    </CartContext.Provider>
  )

}



export default CartProvider;