import React from 'react'
interface Props {
    children:React.ReactNode;
    className?:string;
}
const Button = ({children,className}:Props) => {
  return (
    <button className={`rounded-full w-[150px]  bg-orange-600 hover:bg-orange-500 px-4 py-2 text-white${className}`}>
      {children}
    </button>
  );
}

export default Button
