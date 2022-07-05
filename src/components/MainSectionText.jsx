import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import Triangle from '../Icons/Triangle';
import Button from './Button';

const MainSectionText = () => {
    return (
        <div className="flex flex-col text-white w-fit space-y-4">
            <div className="flex flex-row items-center ">
                <div className="text-7xl font-semibold font-anton uppercase tracking-wider">
                    They Are
                </div>
                <div className="ml-auto mr-5 relative">
                    <div className="flex flex-row w-44 items-center ">
                        <Triangle className="w-10 animate-wiggle" />

                        <div className="absolute left-7">
                            <div className="flex flex-row items-center text-white">
                                <div className="flex flex-row items-center text-sm"><p>GET IN TOUCH</p></div>
                                <div className="ml-2 animate-arrowPointer transition-all"><BsArrowRight className="w-5 h-5" /></div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="text-9xl font-semibold font-anton uppercase tracking-wider">
                <p>Watching</p>
            </div>
            <div className="flex flex-row items-center justify-end space-x-5">
                <Button text={'Discord'} rightIcon={true} icon={<FaDiscord className="w-6 h-6" />} />
                <Button text={'Twitter'} rightIcon={true} icon={<BsTwitter className="w-6 h-6" />} />
                <Button text={'Discord'} rightIcon={true} icon={<BsGithub className="w-6 h-6" />} />
            </div>
        </div>
    )
}

export default MainSectionText