import React from 'react';
import Logo from '../Icons/Logo';
import CenterContainer from './CenterContainer';
import HeaderNavigation from './HeaderNavigation';
import Button from './Button';

const Header = () => {
    return (
        <div className="flex bg-inherit">
            <CenterContainer className="flex flex-row items-center justify-between">
                <Logo className="w-16" />

                <HeaderNavigation />

                <div>
                    <Button text={'connect wallet'} imageUrl={'/purse.png'} leftIcon={true} />
                </div>

            </CenterContainer>
        </div>
    )
}

export default Header