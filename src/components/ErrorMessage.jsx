import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: 'red', marginTop: '15px' }}>
      {message}
    </div>
  );
};

export default ErrorMessage;
