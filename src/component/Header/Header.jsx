import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' sticky top-0 z-10 bg-gray-950 text-white '>
          <div className="navbar justify-between">
          <div className="navbar-start">
            {/* small device bar  */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-gray-950  rounded-b-md ">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='services'>Services</Link></li>
                <li tabIndex={0}>
                    <details className='bg-gray-900'>
                    <summary>Projects</summary>
                    <ul className="w-28">
                        <li><Link to='project-1'>Project-1</Link ></li>
                        <li><Link to='project-2'>Project-2</Link ></li>
                        <li><Link to='todo'>Todo</Link ></li>
                    </ul>
                    </details>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">AppStick</a>
          </div>
          {/* Large device bar */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 hover:text-white">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='services'>Services</Link></li>
                <li tabIndex={0}>
                    <details >
                    <summary>Projects</summary>
                    <ul className="w-28 bg-gray-900">
                        <li><Link to='project-1'>Project-1</Link ></li>
                        <li><Link to='project-2'>Project-2</Link ></li>
                        <li><Link to='todo'>Todo</Link ></li>
                    </ul>
                    </details>
                </li>
            </ul>
          </div>
          
        </div>
        </div>
    );
};

export default Header;