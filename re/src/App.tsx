
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  AboutPage  from './pages/AboutPage';
import HeroPage from './pages/HeroPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<HeroPage />}   />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/posts" element={<PostsPage />} />
    <Route path="/posts/:id" element={<PostPage />} />
    <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
/*
< >
      <Header/>
      <Routes>
      <Route path="/" element={<HeroPage />}   />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </>
*/