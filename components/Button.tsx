import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 font-sans disabled:opacity-50";
  
  const variants = {
    primary: "bg-stone-800 text-white border border-stone-800 hover:bg-transparent hover:text-stone-800",
    outline: "bg-transparent text-stone-800 border border-stone-800 hover:bg-stone-800 hover:text-white",
    ghost: "bg-transparent text-stone-800 hover:text-stone-500",
    white: "bg-white text-stone-900 border border-white hover:bg-stone-900 hover:text-white hover:border-stone-900",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;