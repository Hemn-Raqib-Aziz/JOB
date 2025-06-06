import React from 'react'

const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md grid justify-items-center`}>
    {children}  
    </div>
  );
};

export default Card
