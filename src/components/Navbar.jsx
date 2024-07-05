import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-slate-700 border-b border-slate-500 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        {/* <!-- Logo --> */}
                        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                            <img
                                className="h-10 w-auto"
                                src={ logo }
                                alt="React Jobs"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2"
                            >ScholarConnect</span
                            >
                        </a>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <a
                                    href="/index.html"
                                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >Home</a
                                >
                                <a
                                    href="/mentors.html"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >Mentors</a
                                >
                                <a
                                    href="/add-mentorship.html"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >Add Mentorship</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar