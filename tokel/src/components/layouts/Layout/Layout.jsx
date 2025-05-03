import React from 'react'
import "./Layout.scss";
import Header from '../../common/Header/Header';

const Layout = ({ children }) => {
    return (
        <main className="layout">
            <Header />
            {children}
        </main>
    )
}

export default Layout
