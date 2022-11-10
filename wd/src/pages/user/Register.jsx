import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField, IconButton, InputAdornment, Button } from '@mui/material'

const Register = () => {
    const [isProcess, setIsProcess] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .min(2, "Nama minimal 1 kata")
                .required("Nama Wajib di isi"),
            email: yup
                .string()
                .min(2, "Email minimal 2 characters")
                .max(100, "Maximum 100 characters")
                .required("Email Wajib di isi"),
            password: yup
                .string()
                .min(5, "Password minimal 5 characters")
                .max(100, "Maximum 100 characters")
                .required("Password Wajib di isi"),
        }),
    });

    console.log(formik.values)

    const register = () => {
        if (isProcess) return;
        setIsProcess(true);
        axios.post(
            `http://127.0.0.1:8000/api/register`,
            {
                name: formik.values.name,
                email: formik.values.email,
                password: formik.values.password,
            },
            { timeout: 1000 * 60 }
        ).then(result => {
            formik.resetForm()
            setIsProcess(false);
            alert(result.data.message)
        }).catch(err => {
            formik.resetForm()
            setIsProcess(false);
            alert(err.response.data.message)
        })
    };

    return (
        <>
            <Header />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-left">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <TextField
                                        fullWidth
                                        autoComplete="on"
                                        placeholder="name"
                                        name="name"
                                        className='mt-5'
                                        size="small"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <TextField
                                        fullWidth
                                        autoComplete="on"
                                        placeholder="email"
                                        name="email"
                                        className='mt-5'
                                        size="small"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <TextField
                                        fullWidth
                                        autoComplete="on"
                                        placeholder="password"
                                        name="password"
                                        size="small"
                                        type={!showPassword ? "password" : "text"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        error={
                                            formik.touched.password && Boolean(formik.errors.password)
                                        }
                                        helperText={formik.touched.password && formik.errors.password}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setShowPassword(prev => !prev)}
                                                        size="large"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the
                                            <Link to="#" className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                                                Terms and Conditions
                                            </Link>
                                        </label>
                                    </div>
                                </div>
                                <Button
                                    onClick={register}
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    className="bg-blue-700 p-3 w-full"
                                >
                                    Sign Up
                                </Button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link to="/login" className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                                        Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register