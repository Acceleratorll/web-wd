import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('xToken');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('xToken', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log(user, token)

        setToken(token);
        setUser(user);

        navigate('/profile');
    }

    const logout = () => {
        sessionStorage.clear()
        navigate('/');
    }

    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        logout
    }
}