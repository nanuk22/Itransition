import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import ItemPage from './pages/Item.js';
import CollectionPage from './pages/Collection.js';
import { AuthProvider } from './AuthContext.js';

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};


export default App;
