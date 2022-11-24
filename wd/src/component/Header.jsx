import React from "react";
import { Transition } from "@headlessui/react";
import { Link, NavLink } from 'react-router-dom'
import useSWR, { mutate } from "swr";
import toast from 'react-hot-toast';
import Logo from '../assets/images/favicon.svg'
import axios from 'axios';
import { useState } from 'react'
import { eToast, wToast, sToast } from "../utils/toastCustom";
import AuthUser from "../pages/user/Auth/AuthUser";

const Header = () => {

    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token != undefined) {
            logout();
        }
    }

    const { data: users, error: errorUser } = useSWR(
        `http://localhost:8000/api/users`,
        (url) =>
            axios(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("xtoken"),
                },
                timeout: 1000 * 60,
            }).then((data) => data.data),
        {
            refreshWhenOffline: true,
            loadingTimeout: 45000, //slow network (2G, <= 70Kbps) default 3s
            onLoadingSlow: () => toast.error("Koneksi Anda Buruk", wToast),
            onError: (err) => {
                if (err.code === "ECONNABORTED") {
                    toast.error(
                        "Tidak dapat menjangkau Server, Periksa koneksi anda dan ulangi beberapa saat lagi.",
                        eToast
                    );
                } else if (err.response) {
                    toast.error(err.data.message, eToast);
                } else {
                    toast.error(err.message, eToast);
                }
            },
        }
    );

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-800 w-full">
            <div className="text-white flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto h-14">
                <div className="flex items-center justify-between justify-items-end">
                    <Link to="/" className='flex items-center'>
                        <img src={Logo} className="h-6 mr-3 sm:h-9" alt="" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">My Wedding</span>
                    </Link>
                </div>
                <div className="text-white items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <NavLink to="/" className='block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
                            Home
                        </NavLink>
                        <NavLink to="/desain" className='block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
                            Desain
                        </NavLink>
                        <NavLink to="/contact" className='block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
                            Kontak Kami
                        </NavLink>
                        <NavLink to="/FAQ" className='block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-sky-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
                            FAQ
                        </NavLink>
                    </ul>
                </div>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 lg:inline-block">
                        <Link to="/masuk">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Masuk</button>
                        </Link>
                    </div>
                    {/* <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
                </div>
                <div className="-mr-2 flex lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="lg:hidden" id="mobile-menu">
                        <div ref={ref} className="text-left px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                                Dashboard
                            </Link>
                            <Link to="/desain" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                                Desain
                            </Link>
                            <Link to="/contact" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                                Kontak Kami
                            </Link>
                            <Link to="/FAQ" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                                FAQ
                            </Link>
                            {
                                !users ? (
                                    <button type="button" onClick={logoutUser} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Log Out</button>
                                ) : users?.map(() => {
                                    <Link to="/masuk">
                                        <button type="button" className="ml-3 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Masuk</button>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Header