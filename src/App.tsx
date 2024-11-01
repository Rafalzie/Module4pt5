import React, { useState } from 'react';
import './App.css'; 
import { Button as ShadcnButton } from '@/components/ui/button';

// Define the props for the CustomizableButton component
interface CustomizableButtonProps {
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
}

// Centering component
const ButtonContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CenteredContainer>{children}</CenteredContainer>
);

// CenteredContainer component with styling for centering
const CenteredContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center min-h-screen">{children}</div>
);

const CustomizableButton: React.FC<CustomizableButtonProps> = ({
  text = 'Click',
  backgroundColor = 'bg-blue-500',
  hoverColor = 'bg-black',
  textColor = 'text-white',
  padding = 'px-40 py-20',
  fontSize = 'text-lg',
  borderRadius = 'rounded-full',
  scaleOnHover = 1.05,
  animation = '',
  animationDuration = '500',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://www.crazygames.com/game/soccer-legends-2021', '_blank');
  };

  
  const HoverButton = (
    <ShadcnButton
      className={`
        ${backgroundColor} 
        ${textColor} 
        ${padding} 
        ${fontSize} 
        ${borderRadius} 
        transition-transform 
        duration-200 ease-in-out 
        ${isHovered ? hoverColor : ''} 
        ${isHovered ? `transform scale-${scaleOnHover}` : ''}
        ${animation && isHovered ? `animate-${animation} duration-${animationDuration}` : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {text}
    </ShadcnButton>
  );

  return <ButtonContainer>{HoverButton}</ButtonContainer>;
};

export default CustomizableButton;
