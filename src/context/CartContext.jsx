import React, { createContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { showToast } = useToast();

  useEffect(() => {
    const savedCart = localStorage.getItem('cartDB');
    if (savedCart) setCart(JSON.parse(savedCart));
    const savedWishlist = localStorage.getItem('wishlistDB');
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(newCart);
    localStorage.setItem('cartDB', JSON.stringify(newCart));
    showToast(`${product.name} added to cart!`);
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
    const exists = wishlist.find(item => item.id === product.id);
    let newWishlist;
    if (exists) {
      newWishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      newWishlist = [...wishlist, product];
    }
    setWishlist(newWishlist);
    localStorage.setItem('wishlistDB', JSON.stringify(newWishlist));
    if (exists) {

      showToast(
        `${product.name} removed from wishlist!`,
        "warning"
      );

    }
    else {

      showToast(
        `${product.name} added to wishlist!`,
        "success"
      );

    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, wishlist, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
