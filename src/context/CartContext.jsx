import React, { createContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { showToast } = useToast();

  useEffect(() => {

    try {

      const savedCart =
        localStorage.getItem("cartDB");


      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }



      const savedWishlist =
        localStorage.getItem("wishlistDB");


      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }



    } catch (error) {

      console.log(error);

      localStorage.removeItem("cartDB");
      localStorage.removeItem("wishlistDB");

    }


  }, []);

  const addToCart = (product) => {

const smallProduct = {
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.images?.[0] || product.image,
  category: product.category,
  stock: product.stock
};


    const existing = cart.find(
      item => item.id === product.id
    );


    let newCart;


    if (existing) {

      newCart = cart.map(item =>
        item.id === product.id
          ?
          {
            ...item,
            quantity: item.quantity + 1
          }
          :
          item
      );


    } else {

      newCart = [
        ...cart,
        {
          ...smallProduct,
          quantity: 1
        }
      ];

    }


    setCart(newCart);


    localStorage.setItem(
      "cartDB",
      JSON.stringify(newCart)
    );


    showToast(
      `Product added to cart!`
    );

  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem('cartDB', JSON.stringify(newCart));
    showToast(`Item removed from cart!`, "warning");
  };

  const updateQuantity = (id, quantity) => {
    const newCart = cart.map(item => item.id === id ? { ...item, quantity: Number(quantity) } : item);
    setCart(newCart);
    localStorage.setItem('cartDB', JSON.stringify(newCart));
  };

  const toggleWishlist = (product) => {


    const smallProduct = {

      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || product.image,
      category: product.category

    };



    const exists = wishlist.find(
      item => item.id === product.id
    );


    let newWishlist;



    if (exists) {

      newWishlist =
        wishlist.filter(
          item => item.id !== product.id
        );


      showToast(
        `Product removed from wishlist`,
        "warning"
      );


    }
    else {


      newWishlist = [
        ...wishlist,
        smallProduct
      ];


      showToast(
        `Product added to wishlist`,
        "success"
      );


    }



    setWishlist(newWishlist);


    localStorage.setItem(
      "wishlistDB",
      JSON.stringify(newWishlist)
    );



  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, wishlist, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
