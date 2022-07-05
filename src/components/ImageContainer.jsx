import React from 'react';

const ImageContainer = ({props}) => {

    return (
        <div className="block w-full border">
            <div className={`relative block overflow-hidden pb-[100%] h-[340px] ${props.className}`}>
                <img src={props?.imageLink} alt="nft art" className="w-full h-full absolute top-0 left-0 select-none object-cover" />
                <div className="gradient-bg absolute top-0 left-0 h-full w-full"></div>
            </div>
        </div>
    )
}

export default ImageContainer