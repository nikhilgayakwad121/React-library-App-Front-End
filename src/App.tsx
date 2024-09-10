import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';

function App() {
  return (
    <div>
          <Navbar/>
          <ExploreTopBooks/>
          <Carousel/>
    </div>

  );
}

export default App;
