import * as React from 'react';
import { Outlet } from 'react-router-dom'


import Header from '../components/Header';
import Footer from '../components/Footer';


interface IGeneralLayoutProps {
}

const GeneralLayout: React.FunctionComponent<IGeneralLayoutProps> = (props) => {
    return <>
        <Header />

        <main><Outlet /></main>

        <Footer />

    </>;
};

export default GeneralLayout;
