import React from 'react';

export default function Icon({ name, size = '24px', color = 'inherit', className }) {
  return (
    <span 
      className={`material-icons ${className}`} 
      style={{ 
        fontSize: size, 
        color: color, 
        verticalAlign: 'middle',
        userSelect: 'none'
      }}
    >
      {name}
    </span>
  );
}