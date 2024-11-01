import React, { useState } from 'react';

const Button: React.FC = () => {
  const [hover, setHover] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: hover ? 'Black' : 'Blue',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
    transform: hover ? 'scale(2.05)' : 'scale(1)',
    boxShadow: hover ? '0px 4px 15px rgba(0, 0, 0, 0.2)' : 'none',
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Click
    </button>
  );
};

export default Button;
