//ในหน้านี้มีโค้ดที่ทำให้ปุ่มสามารถ Random Page ได้ แต่ยังพบ Error เมื่อในไปใช้จริง

/*"use client"

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const RandomPageButton: React.FC = () => {
  const handleRandomPageClick = () => {
    const pages = ['/spinone/spinsalt', '/spinone/spinrare', '/spinone/spinlegend'];
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];
    window.location.href = randomPage;
  };

  return (
    <button onClick={handleRandomPageClick} className="tag-button hover:border-black hover:border-3 hover:bg-gray-400 hover:text-black">Search x 1</button>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <RandomPageButton />
    </Router>
  );
};

export default App;
*/
