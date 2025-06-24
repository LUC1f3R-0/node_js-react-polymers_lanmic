import React, { useState } from 'react'
import images from '../../assets/assets'
import {NavLink } from 'react-router-dom'

const MainHeader = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <>
            <div className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4 relative">
                        
                        <div className="flex items-center">
                            <img src={images.logo} alt="Logo" className="w-32 h-20 object-contain" />
                        </div>

                        <button onClick={toggleMenu} className="md:hidden focus:outline-none z-50">
                            {menuOpen ? (
                                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>

                        <nav className={`fixed inset-y-0 right-0 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 bg-gray-800 md:bg-transparent w-64 md:w-auto h-full md:h-auto overflow-y-auto md:overflow-visible transition-transform duration-300 ease-in-out md:transition-none z-40`}>
                            <ul className="pt-16 md:pt-0 px-4 md:px-0 md:flex space-y-2 md:space-y-0 md:space-x-4 text-2xl">

                                <li>
                                    <NavLink to="/" className="block py-2 md:py-0 text-white md:text-black hover:text-blue-700 transition duration-200">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to='about' className="block py-2 md:py-0 text-white md:text-black hover:text-blue-700 transition duration-200">
                                        About
                                    </NavLink>
                                </li>

                                <li><NavLink to="service" className="block py-2 md:py-0 text-white md:text-black hover:text-blue-700 transition duration-200">Service</NavLink></li>
                                <li><NavLink to="team" className="block py-2 md:py-0 text-white md:text-black hover:text-blue-700 transition duration-200">Team</NavLink></li>
                                <li><NavLink to="contact" className="block py-2 md:py-0 text-white md:text-black hover:text-blue-700 transition duration-200">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHeader
