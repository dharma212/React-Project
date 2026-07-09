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
import Checkout from "../pages/Checkout/Checkout";
import OrderList from "../pages/Orders/OrderList";
import OrderDetails from "../pages/Orders/OrderDetails";
import AdminOrderList from "../pages/Admin/AdminOrderList";
import AdminOrderdetails from "../pages/Admin/AdminOrderdetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      
      <Route path="/cart" element={<Cart />} />
      
      <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      
    <Route
        path="/admin/add-product"
        element={
            <ProtectedRoute adminOnly={true}>
                <ProductForm />
            </ProtectedRoute>
        }
    />

    <Route
        path="/admin/edit-product/:id"
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
    <Route 
    path="/checkout"
    element={<Checkout/>}
    />


    <Route 
    path="/orders"
    element={<OrderList/>}
    />


    <Route 
    path="/orders/:id"
    element={<OrderDetails/>}
    />

    <Route
    path="/admin/orders"
    element={
        <ProtectedRoute>
        <AdminOrderList />
        </ProtectedRoute>
    }
    />

    <Route
  path="/admin/orders/:id"
  element={
    <ProtectedRoute adminOnly={true}>
      <AdminOrderdetails />
    </ProtectedRoute>
  }
/>

    <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
