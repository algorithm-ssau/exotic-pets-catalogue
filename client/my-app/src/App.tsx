import React from 'react';
import Header from './common/el/header';
import Footer from './common/el/footer';
import PageHome from './pages/homepage/view/page_home';
import PageCatalogue from './pages/catalogue_page/view/page_catalogue';
import PageFavorites from './pages/favorites_page/view/page_favorites';
import PageCart from './pages/cart_page/view/page_cart';
import { Route, Routes } from 'react-router-dom';
import "./App.css"


function App() {
  return (
    <div className="main-container">
      <Header />

      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/catalogue" element={<PageCatalogue />} />
        <Route path="/favorites" element={<PageFavorites />} />
        <Route path="/cart" element={<PageCart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
