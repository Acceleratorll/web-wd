import React, { useState } from 'react';
import LayoutDashboard from './LayoutDashboard';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, CircularProgress } from '@mui/material'
// import ModalConfirm from '../../component/ModalConfirm';
import useSWR from "swr";
import toast from 'react-hot-toast';
import axios from 'axios';
import { eToast } from "../../utils/toastCustom";
import swal from 'sweetalert';
// import API from "../../utils/host.config";

const ListDataUser = () => {
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState({})

    const handleOpenModal = (data) => {
        setUser(data)
        setOpenModal(true)
    }

    const handleModal = () => setOpenModal(prev => !prev)
    const { data: users, error: errorUsers } = useSWR(
        `auth/users`,
        (url) =>
            axios(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("xtoken"),
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

    if (errorUsers) {
        swal({
            title: "Peringatan",
            text: errorUsers.message,
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
                    if (errorUsers.status === 401) {
                        window.location.reload();
                    }
                    break;
                default:
                    return;
            }
        });
    }

    return (
        <LayoutDashboard>
            <div className="w-full grid grid-cols-1 gap-4 min-h-screen">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">List Akun</h3>
                            <span className="text-base font-normal text-gray-500">Berikut merupakan informasi data user yang terdaftar pada website</span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="overflow-x-auto rounded-lg">
                            <div className="align-middle inline-block min-w-full">
                                <div className="shadow overflow-hidden sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {
                                                !users ? (
                                                    <tr className="absolute inset-0 flex items-center justify-center">
                                                        <td><CircularProgress /></td>
                                                    </tr>
                                                ) : users?.results?.map((element, i) => (
                                                    <tr key={i}>
                                                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {element?.name}
                                                        </td>
                                                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            {element?.email}
                                                        </td>
                                                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            <div className="flex align-middle items-center">
                                                                <p>{element?.status}</p>
                                                                <IconButton onClick={() => handleOpenModal(element)} color="primary" className="bottom-2">
                                                                    <EditIcon />
                                                                </IconButton>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDashboard>
    )
}

export default ListDataUser