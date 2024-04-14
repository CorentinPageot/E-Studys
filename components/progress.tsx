import React from 'react';
import { number } from 'zod';

interface BarProps {
  show: boolean;
  number: number;
  color: string;
  bgColor: string;
}

const ProgressBar: React.FC<BarProps> = ({ show, number, color, bgColor }) => {
  return (
    <div className={`text-[6px] flex justify-center items-center bg-${color} rounded-full h-[15px]`}>
        <div>{show ? `${number}%` : ''}</div>
    </div>
  );
};

export default ProgressBar;
