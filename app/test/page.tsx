import { useState } from 'react';

const RandomButton = () => {
  const [randomPages] = useState(['/spinsalt', '/spinnormal', '/spinrare', '/spinlegend']);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * randomPages.length);
    const randomPage = randomPages[randomIndex];
    window.location.href = randomPage; // เปลี่ยน URL เพื่อเปลี่ยนหน้าโดยตรง
  };

  return (

    <a href="#" className="tag-button hover:border-black hover:border-3 hover:bg-gray-100 hover:text-black" onClick={handleButtonClick}>
      search x 1
    </a>
  );
};

export default RandomButton;