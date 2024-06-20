import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';

import OurNavbar from './components/OurNavbar';
import NewStudent from './pages/NewStudent';
import AllStudents from './pages/AllStudents';
import Footer from './components/Footer';
import EditStudent from './pages/EditStudent';
import './App.css';

function App() {
  
  
  
  return (
    <BrowserRouter>
      <OurNavbar />
      <Routes>
        <Route path="/" element={<AllStudents  />} />
        <Route path="/new" element={<NewStudent />} />
        <Route path="/editStudent" element={<EditStudent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
