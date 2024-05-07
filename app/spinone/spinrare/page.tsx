import React from 'react';

const MovingImage: React.FC = () => {
  return (
    <div>
      <button className="center text-white"> Click to OPEN folder </button>
      <img src="file_open.png" className="w-[200px] h-[100px] moving-image container" />
    </div>
  );
}

export default MovingImage;
