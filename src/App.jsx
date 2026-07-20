import React, {useState, useEffect} from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

import AppRouter from './router/AppRouter';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import FooterSkeleton from './components/skeletons/FooterSkeleton';

import './App.css';



const MainContent = () => {


  const location = useLocation();


  const isAdminPage = location.pathname.startsWith('/admin');


  const [loading,setLoading] = useState(true);



  useEffect(()=>{


    const timer = setTimeout(()=>{

      setLoading(false);

    },1500);


    return ()=>clearTimeout(timer);


  },[]);




  return (

  <div className="app-layout">


      {!isAdminPage && <Navbar />}



      <main style={{flex:1}}>

        <AppRouter />

      </main>



      {

      !isAdminPage && (

        loading ?

        <FooterSkeleton />

        :

        <Footer />

      )

      }


    </div>

  );

};





function App(){

return(

<AuthProvider>

<ProductProvider>

<CartProvider>

<BrowserRouter>

<MainContent />

</BrowserRouter>

</CartProvider>

</ProductProvider>

</AuthProvider>

)

}



export default App;