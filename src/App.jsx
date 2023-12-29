import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Common/Header"
import Footer from "./Components/Common/Footer"
import Home from './Components/Home';
import DashBoard from './Components/DashBoard';
import Upload from './Components/Upload';
import "../src/index.css";

function App() {


  return (
    <React.Fragment>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Upload" element={<Upload />} />

          </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
