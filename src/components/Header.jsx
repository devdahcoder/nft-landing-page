import React from 'react';
import Logo from '../Icons/Logo';
import CenterContainer from './CenterContainer';
import HeaderNavigation from './HeaderNavigation';

const Header = () => {
    return (
        <div className="flex border bg-inherit">
            <CenterContainer className="flex flex-row items-center justify-between">
                <Logo className="w-16" />

                <HeaderNavigation />

                <div>
                    <button className="flex flex-row items-center justify-center border outline-none outline-0 
                        rounded-full h-8 px-3 py-5 shadow-sm text-sm text-white capitalize">
                        connect wallet <span className="ml-3 animate-bounce"><img className="w-5 h-5" src={process.env.PUBLIC_URL + `/purse.png`} alt="" /></span>
                    </button>
                </div>

            </CenterContainer>
        </div>
    )
}

export default Header