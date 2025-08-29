
import * as React from 'react';


// components
import Header from '../components/dashboard/HeaderDash';
import Sidebar from '../components/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';


function DashboardLayout() {
    return (
        <div>
            <Header />

            <div>
                <Sidebar />

                <main><Outlet /></main>

            </div>
        </div>
    )
}

export default DashboardLayout;