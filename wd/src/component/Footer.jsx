import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/favicon.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
                    <div>
                        <h3 className="mb-6 text-lg font-bold uppercase dark:text-white">Company</h3>
                        <ul className="dark:text-gray-400">
                            <li className="mb-4">
                                <Link to="/" className=" hover:underline">
                                    Careers
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className=" hover:underline">
                                    Brands Center
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className=" hover:underline">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-lg font-bold uppercase dark:text-white">Legal</h3>
                        <ul className="dark:text-gray-400">
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Licensing
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <h3 className="mb-6 text-lg font-bold uppercase dark:text-white">Company</h3>
                        <ul className="dark:text-gray-400">
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Blog
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Terms
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-center">
                    <Link to="/" className='flex items-center justify-center mb-5 text-2xl font-semibold dark:text-white'>
                        <img src={Logo} className="h-6 mr-3 sm:h-9" alt="My Wedding Logo" />
                        My Wedding
                    </Link>
                    <span className="block text-sm text-center dark:text-gray-400">
                        © 2021-2022 Landwind™. All Rights Reserved. Built with
                        <a href="https://tailwindcss.com" className="text-purple-600 hover:underline dark:text-purple-500"> Tailwind CSS</a>.
                        Distributed by
                        <a href="https://themewagon.com/" className="text-purple-600 hover:underline dark:text-purple-500">Proyek 2</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer