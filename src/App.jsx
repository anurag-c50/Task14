import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Header from './Components/main/Header';
import Footer from './Components/main/Footer';
export default function App() {
  return (
     <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}
