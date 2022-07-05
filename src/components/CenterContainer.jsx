import React from 'react';

const CenterContainer = (props) => {
    const { className, children } = props;
    return (
        <div className={`w-[90%] my-0 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default CenterContainer