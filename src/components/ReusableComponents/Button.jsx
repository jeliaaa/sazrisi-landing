import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, onClick, isLink, to, className, children, ...props }) => {
    // Conditionally apply styles for the disabled state

    if (isLink) {
        return (
            <Link
                to={to}
                {...props} // Pass all other props to the <Link>
                className={`bg-dark-color text-gray-100 py-[10px] px-[35px] rounded-[10px] cursor-pointer transition-all delay-75 border-2 hover:border-dark-color hover:bg-transparent hover:text-dark-color ${className}`}
            >
                {title}
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`bg-dark-color text-gray-100 py-[10px] px-[35px] rounded-[10px] cursor-pointer transition-all delay-75 border-2 hover: border-dark-color hover:bg-transparent hover:text-dark-color ${className}`}
            {...props}
        >
            {title}
            {children} 
        </button >
    );
};

export default Button;
