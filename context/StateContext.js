import React, { createContext, useContext, useState, useEffect } from 'react';
//import { toast } from 'react-hot-toast';
import { toast } from 'react-toastify';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [quantity, setQuantity] = useState(1);

	let foundProduct;
	let index;

	const showNotification = (productName, quantity) => {
  toast.success(
    <div>
      Se ha agregado <strong>{productName} ({quantity})</strong> a tu carrito.
    </div>
  );
};

	const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

		showNotification(product.name, quantity);
		//toast.success(`Se ha agregado ${product.name} (${quantity}) a tu carrito.`);

  } 

	const onRemove = (product) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);

		setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);

		setCartItems(newCartItems);
	}

	const toggleCartItemQuantity = (id, value) => {
		foundProduct = cartItems.find((item) => item._id === id);
		
		if (value === 'inc') {
			foundProduct.quantity += 1;
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
		} else if (value === 'dec') {
			if (foundProduct.quantity > 1) {
				foundProduct.quantity -= 1;
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
				setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
			}
		}
	
		setCartItems([...cartItems]); //mantiene los elementos en su lugar
	};
	/*const toggleCartItemQuantity = (id, value) => {
		foundProduct = cartItems.find((item) => item._id === id)
		index = cartItems.findIndex((product) => product._id === id);
		const newCartItems = cartItems.filter((item) => item._id !== id);

		if (value === 'inc') {
			setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1}])
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
		} else if (value === 'dec') {
				if(foundProduct.quantity > 1){
					setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1}])
					setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
					setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
				}	
		}

	}*/

	const incQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	}

	const decQuantity = () => {
		setQuantity((prevQuantity) => {
			if (prevQuantity - 1 < 1) return 1;

			return prevQuantity - 1;
		});
	}

	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				cartItems, 
				totalPrice, 
				totalQuantities, 
				quantity,
				incQuantity,
				decQuantity,
				onAdd,
				setCartItems,
        setTotalPrice,
        setTotalQuantities,
				toggleCartItemQuantity,
				onRemove
			}}	
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context);