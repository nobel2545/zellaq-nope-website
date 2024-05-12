import React from 'react';

const MovingImage: React.FC = () => {
  return (
    <div>
      <button className="center text-white"> Click to OPEN folder </button>

      <a href="/legend">
              <img src="file_close.png" className="w-[200px] h-max-[20px] moving-image container" />
      </a>
    </div>
  );
}

export default MovingImage;
