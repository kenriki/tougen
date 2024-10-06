import React from 'react';

interface CustomButtonProps {
  width: string;
  onClick: () => void;
  value: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ width, onClick, value }) => {
  return (
    <button style={{ width }} onClick={onClick}>
      {value}
    </button>
  );
};

export default CustomButton;
