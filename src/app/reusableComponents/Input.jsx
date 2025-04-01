import React, { forwardRef } from "react";

const Input = forwardRef(({ label, value, ...rest }, ref) => {
    return (
        <div>
            <label className="text-lg font-medium text-gray-900">
                <span className="text-base">{label}</span>
            </label>
            <input
                ref={ref}
                value={value || ''} // Ensure value is always defined or fallback to empty string
                className="w-full mt-2 px-3 py-2 border border-dark-color rounded-md text-md text-dark-color shadow-sm focus:outline-none focus:ring-2 focus:ring-main-color focus:border-main-color"
                {...rest}
            />
        </div>
    );
});

Input.displayName = 'Input';

export default Input;