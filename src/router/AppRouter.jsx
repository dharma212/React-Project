import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import ProductList from '../pages/Products/ProductList';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/NotFound/NotFound';
import ProtectedRoute from './ProtectedRoute';
import ProductForm from '../pages/Admin/ProductForm';
import Dashboard from "../pages/Admin/Dashboard";
import ProductManagement from "../pages/Admin/ProductManagement";
import CartList from "../pages/Admin/CartList";
import WishlistList from "../pages/Admin/WishlistList";
import UserList from '../pages/Admin/UserList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      
      <Route path="/cart" element={<Cart />} />
      
      {/* Protected Routes */}
      <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      
      {/* Admin / Product CRUD Routes */}
    <Route
        path="/add-product"
        element={
            <ProtectedRoute adminOnly={true}>
                <ProductForm />
            </ProtectedRoute>
        }
    />

    <Route
        path="/edit-product/:id"
        element={
            <ProtectedRoute adminOnly={true}>
                <ProductForm />
            </ProtectedRoute>
        }
    />
    <Route
    path="/admin"
    element={
        <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute>
    }
    />

    <Route
    path="/admin/products"
    element={
        <ProtectedRoute>
        <ProductManagement />
        </ProtectedRoute>
    }
    />

    <Route
    path="/admin/carts"
    element={
        <ProtectedRoute>
        <CartList />
        </ProtectedRoute>
    }
    />

    <Route
    path="/admin/wishlist"
    element={
        <ProtectedRoute>
        <WishlistList />
        </ProtectedRoute>
    }
    />
    <Route
        path="/admin/User"
        element={
            <ProtectedRoute>
                <UserList />
            </ProtectedRoute>
        }
    />
        <Route path="*" element={<NotFound />} />
        </Routes>
  );
};

export default AppRouter;
