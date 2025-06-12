import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '15px',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
};

export default Button;
