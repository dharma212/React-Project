import React, { createContext, useState, useEffect } from 'react';
import { initialProducts } from '../data/products';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Name A-Z");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const saved = localStorage.getItem('productsDB');

      if (saved) {
        setProducts(JSON.parse(saved));
      } else {
        setProducts(initialProducts);
        localStorage.setItem('productsDB', JSON.stringify(initialProducts));
      }

      setLoading(false);
    }, 1000);
  }, []);

  const addProduct = (product) => {
    const newProducts = [...products, { ...product, id: Date.now() }];
    setProducts(newProducts);
    localStorage.setItem('productsDB', JSON.stringify(newProducts));
  };

  const updateProduct = (updated) => {
    const newProducts = products.map(p =>
      p.id === updated.id ? updated : p
    );
    setProducts(newProducts);
    localStorage.setItem('productsDB', JSON.stringify(newProducts));
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    localStorage.setItem('productsDB', JSON.stringify(newProducts));
  };

  const getFilteredAndSortedProducts = () => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter !== "All") {
      result = result.filter(p => p.category === categoryFilter);
    }

    if (sortOrder === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        getFilteredAndSortedProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        searchQuery,
        setSearchQuery,
        categoryFilter,
        setCategoryFilter,
        sortOrder,
        setSortOrder
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};