import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import { Link, NavLink } from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
import useSWR, { mutate } from "swr";
import swal from 'sweetalert';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DefaultModal from '../../Admin/DefaultModal';
import { IconButton, TextField } from '@mui/material'
import Logo from '../../../assets/images/favicon.svg'
import { eToast, sToast, wToast } from "../../../utils/toastCustom";
import toast from 'react-hot-toast';
import AuthUser from './AuthUser';

const Profile = () => {

    const [openModal, setOpenModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [profile, setProfile] = useState({
        nama: "",
        email: "",
    })

    const { token, logout, user } = AuthUser();
    const logoutUser = () => {
        if (token != undefined) {
            logout();
        }
    }

    const { data: profiles, error: errorPegawaiKelurahan } = useSWR(
        `http://127.0.0.1:8000/api/users`,
        (url) =>
            axios(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("xToken"),
                },
            }).then((data) => data.data),
        {
            refreshWhenOffline: true,
            loadingTimeout: 45000, //slow network (2G, <= 70Kbps) default 3s
            onLoadingSlow: () => toast.error("Koneksi Anda Buruk", eToast),
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

    if (errorPegawaiKelurahan) {
        swal({
            title: "Peringatan",
            text: errorPegawaiKelurahan.message,
            icon: "error",
            closeOnClickOutside: false,
            buttons: {
                catch: {
                    text: "Tutup",
                    value: "oke",
                    className: "mx-auto",
                },
            },
        }).then((value) => {
            switch (value) {
                case "oke":
                    if (errorPegawaiKelurahan.status === 401) {
                        window.location.reload();
                    }
                    break;
                default:
                    return;
            }
        });
    }

    const formik = useFormik({
        initialValues: {
            id: "",
            nama: "",
            email: "",
        },
        validationSchema: yup.object({
            nik: yup
                .string()
                .min(2, "Nama minimal 2 characters")
                .max(100, "Maximum 100 characters")
                .required("Nama Wajib di isi"),
            nama: yup
                .string()
                .min(2, "Nama minimal 2 characters")
                .max(100, "Maximum 100 characters")
                .required("Nama Wajib di isi"),
            email: yup
                .string()
                .min(2, "Email minimal 2 characters")
                .max(100, "Maximum 100 characters")
                .required("Email Wajib di isi"),
        }),
    })

    const onSaveEdit = async () => {
        const dataSaveEdit = {
            nama: profile.nama,
            tanggal_lahir: profile.tanggal_lahir.toString(),
            jabatan: profile.jabatan,
            phone: profile.phone,
            photo: profile.photo,
        }

        await axios.put(`http://127.0.0.1:8000/api/users`, dataSaveEdit, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("xToken"),
            },
        }).then(result => {
            if (result.data.code === 200) {
                toast.success(result.data.message, sToast);
            } else {
                toast.success(result.data.message, wToast);
            }
        }).catch(err => {
            if (err.code === "ECONNABORTED") {
                toast.success(
                    "Tidak dapat menjangkau Server, Periksa koneksi anda dan ulangi beberapa saat lagi.",
                    eToast
                );
            } else if (err.response) {
                toast.error(err.response.data.message, eToast);
            } else {
                toast.error(err.message, eToast);
            }
        })
        mutate(`http://127.0.0.1:8000/api/users`)
    }

    const onInputEditChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleModal = () => setOpenModal(prev => !prev)

    const handleOpenModal = (data) => {
        setProfile({
            nik: data.nik,
            nama: data.nama,
            tanggal_lahir: data.tanggal_lahir,
            jabatan: data.jabatan,
            phone: data.phone,
            photo: data.photo,
        })
        setOpenModal(true)
    }

    return (
        <>
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
                            <Link to="/">
                                <button type="button" onClick={logoutUser} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Log Out</button>
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
                                <Link to="/">
                                    <button type="button" onClick={logoutUser} className="ml-3 mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Log Out</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

            <div class="grid max-w-screen-xl mx-auto mt-14">

                <div class="flex flex-row mx-auto rounded-lg border border-gray-200/80 bg-white p-6">
                    <div class="relative">
                        <img class="w-40 h-40 rounded-md object-cover" src="https://images.unsplash.com/photo-1668894210462-3dff501cd97d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                            alt="User" />
                        <div
                            class="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
                            title="User is online"></div>
                    </div>

                    <div class="flex flex-col px-6">
                        <div class="flex h-8 flex-row">
                            <h2 class="text-lg font-semibold">{user.name}</h2>
                            {/* {
                                profiles?.map((element, i) => (
                                    <>
                                        <h2 class="text-lg font-semibold">{user.name} <IconButton onClick={() => handleOpenModal(element)}><EditIcon /></IconButton></h2>
                                    </>
                                ))
                            }
                            <DefaultModal
                                title={`Edit ${profile?.nama}`}
                                open={openModal}
                                setOpen={handleModal}
                                onSubmit={onSaveEdit}
                            >
                                <form
                                >
                                    <div className="mb-5">
                                        <TextField
                                            fullWidth
                                            autoComplete="on"
                                            label="Nama"
                                            placeholder="Nama"
                                            name="nama"
                                            size='small'
                                            className='mt-5'
                                            onChange={(e) => onInputEditChange(e)}
                                            value={profile.nama}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <TextField
                                            fullWidth
                                            autoComplete="on"
                                            label="EMAIL"
                                            placeholder="EMAIL"
                                            name="email"
                                            size='small'
                                            className='mt-5'
                                            onChange={(e) => onInputEditChange(e)}
                                            value={profile.email}
                                        />
                                    </div>
                                </form>
                            </DefaultModal> */}

                        </div>

                        <div class="my-2 flex flex-row space-x-2">
                            <div class="flex flex-row">
                                <svg class="mr-2 h-4 w-4 fill-gray-500/80" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
                                </svg>

                                <div class="text-xs text-gray-400/80 hover:text-gray-400">{user.email}</div>
                            </div>

                            <div class="flex flex-row">
                                <svg class="mr-2 h-4 w-4 fill-gray-500/80" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                                </svg>

                                <div class="text-xs text-gray-400/80 hover:text-gray-400">Istanbul</div>
                            </div>

                        </div>

                        <div class="mt-2 flex flex-row items-center space-x-5">

                            <a href="#"
                                class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                                <div class="flex flex-row items-center justify-center">
                                    <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
                                        version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                                    </svg>

                                    <span class="font-bold text-gray-600"> 4.6K </span>
                                </div>

                                <div class="mt-2 text-sm text-gray-400">Comments</div>
                            </a>

                            <a href="#"
                                class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                                <div class="flex flex-row items-center justify-center">
                                    <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
                                        version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z" />
                                    </svg>

                                    <span class="font-bold text-gray-600"> 45 </span>
                                </div>

                                <div class="mt-2 text-sm text-gray-400">Projects</div>
                            </a>

                            <a href="#"
                                class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                                <div class="flex flex-row items-center justify-center">
                                    <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
                                        version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M5.68,19.74C7.16,20.95 9,21.75 11,21.95V19.93C9.54,19.75 8.21,19.17 7.1,18.31M13,19.93V21.95C15,21.75 16.84,20.95 18.32,19.74L16.89,18.31C15.79,19.17 14.46,19.75 13,19.93M18.31,16.9L19.74,18.33C20.95,16.85 21.75,15 21.95,13H19.93C19.75,14.46 19.17,15.79 18.31,16.9M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12M4.07,13H2.05C2.25,15 3.05,16.84 4.26,18.32L5.69,16.89C4.83,15.79 4.25,14.46 4.07,13M5.69,7.1L4.26,5.68C3.05,7.16 2.25,9 2.05,11H4.07C4.25,9.54 4.83,8.21 5.69,7.1M19.93,11H21.95C21.75,9 20.95,7.16 19.74,5.68L18.31,7.1C19.17,8.21 19.75,9.54 19.93,11M18.32,4.26C16.84,3.05 15,2.25 13,2.05V4.07C14.46,4.25 15.79,4.83 16.9,5.69M11,4.07V2.05C9,2.25 7.16,3.05 5.68,4.26L7.1,5.69C8.21,4.83 9.54,4.25 11,4.07Z" />
                                    </svg>

                                    <span class="font-bold text-gray-600"> 120K </span>
                                </div>

                                <div class="mt-2 text-sm text-gray-400">Downloads</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile