import React, { useState } from 'react';
import LayoutDashboard from './LayoutDashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalDelete from './ModalDelete';
import { IconButton, CircularProgress } from '@mui/material'
// import ModalConfirm from '../../component/ModalConfirm';
import useSWR, { mutate } from "swr";
import toast from 'react-hot-toast';
import axios from 'axios';
import { eToast, wToast, sToast } from "../../utils/toastCustom";
import swal from 'sweetalert';
// import API from "../../utils/host.config";

const ListAcount = () => {

    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const handleDeleteModal = () => setOpenDeleteModal(prev => !prev)
    const [usersId, setUsersId] = useState({
        nama: "",
        email: "",
    })

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

    const handleOpenDeleteModal = (data) => {
        setUsersId({
            nik: data.nik,
            nama: data.nama,
            email: data.email,
        })
        setOpenDeleteModal(true)
    }

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/users`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("xtoken"),
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
        mutate(`http://localhost:8000/api/users`)
    }

    if (errorUser) {
        swal({
            title: "Peringatan",
            text: errorUser.message,
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
                    if (errorUser.status === 401) {
                        window.location.reload();
                    }
                    break;
                default:
                    return;
            }
        });
    }

    const [user, setUsers] = useState([]);

    const deleteUser = (id) => {
        delete ('http://localhost:8000/api/users/' + id).then(res => {

        })
    }
    console.log(user)

    return (
        <LayoutDashboard>
            <div className="w-full grid grid-cols-1 gap-4 min-h-screen">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">List Akun</h3>
                            <span className="text-base font-normal text-gray-500">Berikut merupakan list akun yang terdaftar pada website</span>
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
                                                    ID
                                                </th>
                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {
                                                !users ? (
                                                    <tr className="absolute inset-0 flex items-center justify-center">
                                                        <td><CircularProgress /></td>
                                                    </tr>
                                                ) : users?.map((element, i) => (
                                                    <tr key={i}>
                                                        <td className="p-4 whitespace-nowrap text-sm text-left font-normal text-gray-900">
                                                            {element?.id}
                                                        </td>
                                                        <td className="p-4 whitespace-nowrap text-sm text-left font-normal text-gray-900">
                                                            {element?.name}
                                                        </td>
                                                        <td className="p-4 whitespace-nowrap text-sm text-left font-normal text-gray-500">
                                                            {element?.email}
                                                        </td>
                                                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            <IconButton onClick={() => { deleteUser(user.id) }}><DeleteIcon /></IconButton>
                                                        </td>
                                                        {/* <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            <div className="flex align-middle items-center">
                                                                <p>{element?.status}</p>
                                                                <IconButton onClick={() => handleOpenModal(element)} color="primary" className="bottom-2">
                                                                    <EditIcon />
                                                                </IconButton>
                                                            </div>
                                                        </td> */}
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
                <ModalDelete
                    data={usersId}
                    open={openDeleteModal}
                    setOpen={handleDeleteModal}
                    handleDelete={() => onDelete(usersId.id)}
                />
            </div>
        </LayoutDashboard>
    )
}

export default ListAcount