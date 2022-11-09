import React from 'react'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { eToast, sToast, wToast } from "../../utils/toastCustom";

const Form = () => {

    const formik = useFormik({
        initialValues: {
            nama: "",
            status_kependudukan: "",
            identitas: "",
            alamat: "",
            pekerjaan: "",
            email: "",
            phone: "",
            photo: "",
            judul: "",
            message: "",
            status: "",
        },
        // validationSchema: yup.object({
        //     nama: yup
        //         .string()
        //         .min(2, "Nama minimal 2 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("Nama Wajib di isi"),
        //     status_kependudukan: yup
        //         .string()
        //         .min(4, "Status Kependudukan minimal 4 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("Status Kependudukan Wajib di isi"),
        //     identitas: yup
        //         .string()
        //         .min(8, "Identitas minimal 8 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("Identitas Wajib di isi"),
        //     alamat: yup
        //         .string()
        //         .min(5, "Alamat minimal 5 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("Alamat Wajib di isi"),
        //     pekerjaan: yup
        //         .string()
        //         .min(3, "pekerjaan minimal 3 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("pekerjaan Wajib di isi"),
        //     email: yup
        //         .string()
        //         .min(4, "email minimal 4 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("email Wajib di isi"),
        //     judul: yup
        //         .string()
        //         .min(8, "Judul minimal 8 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("Judul Wajib di isi"),
        //     message: yup
        //         .string()
        //         .min(18, "Pesan minimal 28 characters")
        //         .max(255, "Maximum 255 characters")
        //         .required("Pesan Wajib di isi"),
        //     status: yup
        //         .string()
        //         .min(7, "Status minimal 7 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("Status Wajib di isi"),
        //     phone: yup
        //         .string()
        //         .min(8, "Phone minimal 8 characters")
        //         .max(100, "Maximum 100 characters")
        //         .required("Phone Wajib di isi"),
        //     photo: yup
        //         .string()
        //         .min(8, "Foto minimal 8 characters")
        //         .max(255, "Maximum 255 characters")
        //         .required("Foto Wajib di isi"),
        // }),
    });

    const onSaveAdd = async () => {
        const dataSave = {
            fname: formik.values.fname,
            lname: formik.values.lname,
            username: formik.values.username,
            email: formik.values.email,
            avatar: formik.values.avatar,
        };
        await axios
            .post(`https://www.melivecode.com/api/users/create`, dataSave, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("xtoken"),
                },
                timeout: 1000 * 60,
            })
            .then((result) => {
                formik.resetForm();
                if (result.data.code === 200) {
                    toast.success(result.data.message, sToast);
                } else {
                    toast.success(result.data.message, wToast);
                }
            })
            .catch((err) => {
                formik.resetForm();
                if (err.code === "ECONNABORTED") {
                    toast.success(
                        "Tidak dapat menjangkau Server, Periksa koneksi anda dan ulangi beberapa saat lagi.",
                        wToast
                    );
                } else if (err.response) {
                    toast.error(err.response.data.message, eToast);
                } else {
                    toast.error(err.message, eToast);
                }
            });
    };

    return (
        <>
            <Header />
            {/* <Toast /> */}
            <div className="text-center">
                <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                    FORM
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    My <span className="text-indigo-600">Wedding</span>
                </h3>
                <p className="mx-auto max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 lg:leading-9">Cantumkan informasi yang benar dan terbaru.</p>
            </div>
            <form className='text-left grid max-w-screen-md px-4 pb-8 mx-auto'>
                <div className="mb-6">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                    <input value={formik.values.fname} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                        <input value={formik.values.lname} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                        <input value={formik.values.username} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                        <input value={formik.values.email} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                        <input value={formik.values.avatar} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>

                <div className="grid justify-items-end">

                    <button onClick={onSaveAdd} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto lg:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lanjutkan</button>
                </div>

            </form>
            <Footer />
        </>
    )
}

export default Form