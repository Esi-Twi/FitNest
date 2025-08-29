import * as React from 'react';
import { Outlet } from 'react-router-dom'


import Header from '../components/main/HeaderMain';
import Footer from '../components/main/Footer';


function GeneralLayout() {
    return (
        <>
            <Header />

            <main><Outlet /></main>

            <Footer />
        </>
    )
}

export default GeneralLayout

