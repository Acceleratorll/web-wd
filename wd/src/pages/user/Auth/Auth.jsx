import React from 'react'
import axios from 'axios'

const Auth = () => {
    const http = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
        headers: {
            "Content-type": "aplication/json"
        }
    })
    return (
        http
    )
}

export default Auth