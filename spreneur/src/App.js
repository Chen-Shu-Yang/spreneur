import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Footer from './Components/Footer';
import Blog from './Pages/blog';
import Navbar from './Components/Navbar';
import Book from './Pages/book';
import Academy from './Pages/academy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/blog" element={<Blog />} exact />
        <Route path="/book" element={<Book />} exact />
        <Route path="/academy" element={<Academy />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;