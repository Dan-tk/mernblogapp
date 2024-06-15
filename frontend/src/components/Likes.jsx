// components/LikeButton.jsx
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={handleClick} className="flex items-center mt-8">
      {liked ? <FaHeart color="red" /> : <FaRegHeart color="black" />}
      <p className="ml-1">1</p>
    </div>
  );
};

export default LikeButton;
