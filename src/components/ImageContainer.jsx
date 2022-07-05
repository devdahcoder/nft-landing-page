import React from 'react';

const ImageContainer = (props) => {

    const classStyle = props.className ? props.className : '';

    return (
        <div className="block w-full">
            <div className={`relative block overflow-hidden pb-[100%] ${classStyle}`}>
                <img src={props?.imageLink} alt="nft art" className="w-full h-full absolute top-0 left-0 select-none object-contain" />
            </div>
        </div>
    )
}

export default ImageContainer