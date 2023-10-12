import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
    return (
        <div className='bg-gray-950 w-52 text-white h-screen flex justify-center list-none sticky '>
            <div className='flex flex-col gap-5 '>
                <li><Link className='flex gap-3' to='Profile'><MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />Profile</Link></li>
                <li><Link className='flex gap-3' to='Setting'><MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />Setting</Link></li>
                <li><Link className='flex gap-3' to='Help'><MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />Help</Link></li>
                <li><Link className='flex gap-3' to='Listed'><MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />Listed</Link></li>
            </div>
        </div>
        
    );
};

export default Sidebar;