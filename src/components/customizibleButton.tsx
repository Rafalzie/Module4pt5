import React, { useState } from 'react';

// Define the props for the Button component
interface ButtonProps {
  text?: string;
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  scaleOnHover?: number;
  animation?: string;
  animationDuration?: string;
  onClick?: () => void; // New prop for handling click events
}

const Button: React.FC<ButtonProps> = ({
  text = 'Click',
  backgroundColor = 'Blue',
  hoverColor = 'Black',
  textColor = 'white',
  padding = '12px 24px',
  fontSize = '16px',
  borderRadius = '25px',
  scaleOnHover = 1.05,
  animation = 'none',
  animationDuration = '0.5s',
  onClick, // Accept onClick function as a prop
}) => {
  const [hover, setHover] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: hover ? hoverColor : backgroundColor,
    color: textColor,
    padding: padding,
    fontSize: fontSize,
    border: 'none',
    borderRadius: borderRadius,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
    transform: hover ? `scale(${scaleOnHover})` : 'scale(1)',
    boxShadow: hover ? '0px 4px 15px rgba(0, 0, 0, 0.2)' : 'none',
    animation: hover ? `${animation} ${animationDuration} ease-in-out` : 'none',
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // Trigger the onClick function
    >
      {text}
    </button>
  );
};

export default Button;
