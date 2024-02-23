import React from 'react';
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Navigation from './pages/customer/components/Navigation';
import Footer from './pages/customer/components/Footer';
import Index from './pages/customer/Index';
import Register from './pages/customer/auth/Register';
import Login from './pages/customer/auth/Login';
import Error from './pages/customer/Error';
import Signin from './pages/admin/auth/Signin';
import Signup from './pages/admin/auth/Signup';
import Home from './pages/admin/Home';
import Pages from './pages/customer/components/Pages';

const   Layout = ()  => {
  return(
    <> 
    <Navigation /> 
    <Outlet /> 
    <Footer/> 
    </>
  )
}

const router = createBrowserRouter ([
  {
    path: "/",
    element:  <Layout/>,
    children: [
      {
        path: "/",
        element:  < Index/> 
      },
      {
        path: "/single",
        element:  < Pages/> 
      },
    ],
  },
  {
    path: "/auth/user/register",
        element:  < Register/> 
  },
  {
    path: "/auth/user/login",
        element:  < Login/> 
  }, 
  {
    path: "*",
        element:  < Error/> 
  },
// Les leins vers les dossier Admin avec les connexion de admin
  {
    path: "/admin/property",
        element:  < Home/> 
  }, 
  //Connexion et inscription de admin
  {
    path: "/auth/owner/signin",
        element:  < Signin/> 
  }, 
  {
    path: "/auth/owner/signup",
        element:  < Signup/> 
  }, 
])

const App = () => {
  return (
    <>
     < RouterProvider  router = {router}/>
    </>
  );
};

export default App;