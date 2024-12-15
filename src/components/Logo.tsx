import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" style={{ 
      display: 'flex', 
      alignItems: 'center',
      height: '150px',
      minWidth: '200px'
    }}>
      <img 
        src="/images/logo.png" 
        alt="麻雀软件" 
        style={{ 
          height: '100px'
        }} 
      />
    </Link>
  );
};

export default Logo; 