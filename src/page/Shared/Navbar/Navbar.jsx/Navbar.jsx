
import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../../../../assets/Group 1.png'
const Navbar = () => {
    const navOption = <>
        <li><a>Home</a></li>

        <li><a>What we do</a></li>
        <li><a>What is Digikoein?</a></li>
        <li><a>Remittance</a></li>
        <li><a>About</a></li>
    </>
    return (
        <div>
            <div className="relative">
                <div className="bg-[#4073D1] shadow-md bg-opacity-30 w-full fixed z-10">
                    <div className="max-w-screen-xl mx-auto text-white">
                        <div className="navbar">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu h-96 menu-sm dropdown-content bg-[#4073D1] rounded-box z-[1] mt-3 w-64 p-2 shadow">
                                        {navOption}
                                    </ul>
                                </div>
                                <a className="btn btn-ghost text-xl">
                                    <img className='w-24' src={logo} alt="" />
                                </a>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    {navOption}
                                </ul>
                            </div>
                            <div className="navbar-end items-center ">
                                <a className="btn btn-xs">English
                                <div>
                                    <IoMdArrowDropdown />
                                </div>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;