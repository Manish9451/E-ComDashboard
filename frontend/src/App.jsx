import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import SignUp from './components/SignUp.jsx';
import PrivateComponents from './components/PrivateComponents.jsx';
import Login from './components/Login.jsx';
import AddProduct from './components/AddProduct.jsx';

function App() {

  return (

    <div className="main-content">

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route element={<PrivateComponents />}>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/add" element={<AddProduct></AddProduct>} />
          <Route path="/update" element={<h1>Update Products Page</h1>} />
          <Route path="/logout" element={<h1>Logout Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
          </Route>
          
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<Login></Login>} />
       </Routes>
      </BrowserRouter>
      <Footer />  

    </div>


  )
}

export default App
