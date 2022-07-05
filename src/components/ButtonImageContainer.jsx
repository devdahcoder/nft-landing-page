import React from 'react';

const ButtonImageContainer = ({props}) => {
    return (
        <span className={`${props?.rightIcon ? 'mr-3' : 'ml-3'} ${props?.imageContainerClassName}`}>
            {
                props?.icon ? (
                    <>
                        {props?.icon}
                    </>
                ) : 
                (
                    <>
                        <img className={`w-5 h-5 ${props?.imageClassName}`} src={process.env.PUBLIC_URL + `${props?.imageUrl}`} alt={`button icon ${props?.buttonAlt} `} />
                    </>
                )
            }
            
        </span>
    )
}

export default ButtonImageContainer