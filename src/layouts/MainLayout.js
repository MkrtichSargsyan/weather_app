import React from 'react';
import Header from "../components/Header/Header";

const MainLayout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
};

export default MainLayout;
