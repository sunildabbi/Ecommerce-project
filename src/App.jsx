import { useState } from "react";
import Card from './Components/Card'
import "./App.css";
function App() {
  return (
    <div className='App'>
      <header className="headerId">
        
        <nav>
          
          <ul>
            
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#orders">Orders</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <input
                type="text"
                placeholder="Search for products"
                className="searchInput"
              />
            </li>
          </ul>
        </nav>
        
      </header>
      <Card />
    </div>
  );
}

export default App;
