
import * as React from 'react';


// components
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';


interface IDashboardLayoutProps {
}





const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = (props) => {
    return (
        <div>
            <Header />

            <div>
                <Sidebar />

                <main><Outlet /></main>

            </div>
        </div>
    );
};

export default DashboardLayout;
