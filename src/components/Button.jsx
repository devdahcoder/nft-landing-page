/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ButtonImageContainer from './ButtonImageContainer';

const Button = (props) => {
    return (
        <div>
            <button className={`
                flex flex-row items-center justify-center border outline-none outline-0 
                rounded-full h-8 px-3 py-5 shadow-sm text-sm text-white capitalize
                ${props?.className}
            `}
            onClick={props?.clickAction}
            >
                {
                    props?.rightIcon && (<ButtonImageContainer props={props} />)
                }
                {props?.text} 
                {
                    props?.leftIcon && (<ButtonImageContainer props={props} />)
                }
            </button>
        </div>
    )
}

export default Button