import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

const MainContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Jo admin page nathi, to j navbar dekhase */}
      {!isAdminPage && <Navbar />} 
      
      <main style={{ flex: 1 }}>
        <AppRouter />
      </main>
      
      {/* Jo admin page nathi, to j footer dekhase */}
      {!isAdminPage && <Footer />} 
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            {/* Ahiya MainContent ne call karvo, juna div ne nikali nakho */}
            <MainContent />
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;