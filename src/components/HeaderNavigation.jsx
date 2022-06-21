import React from 'react';
import { navigationLinks } from '../constant/nav.js';


const HeaderNavigation = () => {
    return (
        <div className="relative">
            <div className="flex flex-row items-center list-none space-x-8">
                {
                    navigationLinks && navigationLinks?.map((nav, index) => {
                        return (
                            <li key={index} className="">
                                <a href="http://" target="_blank" rel="noopener noreferrer" 
                                    className="flex text-sm flex-row items-center justify-between rounded-md text-white w-full px-3 py-1.5 capitalize">
                                    {nav?.name}
                                </a>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderNavigation