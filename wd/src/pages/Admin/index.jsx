import React, { useState } from 'react'
import NavbarDashboard from './NavbarDashboard';
import SidebarAdmin from './SidebarAdmin';
import DashboardAdmin from './DashboardAdmin';
// import FooterDashboard from '../../component/FooterDashboard';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import ExamplePage from './ExamplePage';
import ListAcount from './ListAcount';
import ListDataUser from './ListDataUser';

const Admin = () => {
    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.user);
    if (user.isAuth === false) {
        localStorage.clear();
        <Navigate to="/login" replace />
    }

    console.log(user)
    return (
        <>
            <NavbarDashboard open={open} setOpen={setOpen} />
            <SidebarAdmin open={open} />
            <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <Routes>
                <Route path="/" element={<DashboardAdmin />} />
                <Route path="/list-acount" element={<ListAcount />} />
                <Route path="/list-data-user" element={<ListDataUser />} />
                {/* <Route path="/pegawai-kelurahan" element={<PegawaiKelurahan />} /> */}
            </Routes>
        </>
    )
}

export default Admin