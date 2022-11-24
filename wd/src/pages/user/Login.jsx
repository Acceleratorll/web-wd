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
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { eToast, sToast, wToast } from "../../utils/toastCustom";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import AuthUser from './Auth/AuthUser';

const Login = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { setToken } = AuthUser();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
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

    const onLogin = async () => {
        if (!isAuthenticating) {
            setIsAuthenticating(true);
            //Call
            await axios
                .post(
                    `http://127.0.0.1:8000/api/login`,
                    {
                        email: formik.values.email,
                        password: formik.values.password,
                    },
                    { timeout: 1000 * 45 }
                )
                .then((result) => {
                    formik.resetForm();
                    setToken(result.data.data.user, result.data.data.token);
                    setIsAuthenticating(false);
                    if (result.data.code === 200) {
                        toast.success(result.data.message, sToast);
                        dispatch(login(result.data.results.payload));
                    } else {
                        toast.success(result.data.message, wToast);
                    }
                })
                .catch((err) => {
                    formik.resetForm();
                    setIsAuthenticating(false);
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
        }
    };

    if (user?.isAuth) {
        if (user.value.authorize === "admin") {
            return <Navigate to="profile" replace />;
        }
    }

    return (
        <>
            <Header />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-left">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <TextField
                                        fullWidth
                                        autoComplete="on"
                                        label="Email "
                                        placeholder="email"
                                        name="email"
                                        className="mt-5"
                                        size='small'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        error={
                                            formik.touched.email && Boolean(formik.errors.email)
                                        }
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
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/forgot_password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Button
                                    onClick={onLogin}
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    className="bg-blue-700 p-3 w-full"
                                >
                                    Sign In
                                </Button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?
                                    <Link to="/register" className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                                        Sign Up
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

export default Login