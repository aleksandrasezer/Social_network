import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="app_wrapper">
      <div className="header">
          <Header />
      </div>
      <div className="navbar">
          <Navbar />
      </div>
      <div className="profile">
          <Profile />
      </div>
    </div>
  );
}

export default App;
