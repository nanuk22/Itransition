import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import { AuthProvider } from './AuthContext.js';
import Profile from './pages/Profile.js';
import CreateCollection from './pages/CreateCollection.js';
import MyCollections from './pages/MyCollections.js';



const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/profile/:userId" element={<Profile />} />
          <Route path="/user/create/:userId" element={<CreateCollection />} />
          <Route path="/user/collections/:userId" element={<MyCollections />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};


export default App;
