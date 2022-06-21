import React from 'react';

const CenterContainer = (props) => {
    const { className, children } = props;
    return (
        <div className={`w-4/5 my-0 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default CenterContainer