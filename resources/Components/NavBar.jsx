import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const pages = ['Products', 'Pricing', 'Blog'];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="text-white font-bold text-xl tracking-wider">
                        Dr.S. Vairachilai
                    </div>

                    {/* Desktop Menu (centered) */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
                        {pages.map((page) => (
                            <a
                                key={page}
                                href="#"
                                className="text-white hover:text-yellow-300 hover:bg-white/10 px-4 py-2 rounded-lg font-medium transition duration-300"
                            >
                                {page}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 transition duration-300"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {pages.map((page) => (
                            <a
                                key={page}
                                href="#"
                                className="block text-white hover:text-yellow-300 hover:bg-white/10 px-4 py-2 rounded-lg text-base font-medium transition duration-300"
                            >
                                {page}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
