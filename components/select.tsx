import React from 'react';

interface SelectorProps {
  name: string;
}

const Selector: React.FC<SelectorProps> = ({ name }) => {
  return (
    <div className='border border-studysGreen rounded-full py-0.5 px-3 text-sm'>{name}</div>
  );
};

export default Selector;
