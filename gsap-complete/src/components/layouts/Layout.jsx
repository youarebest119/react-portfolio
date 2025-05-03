import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header/Header'
import { Container } from 'react-bootstrap'

const Layout = () => {
    return (
        <>
            <div className="main_layout">
                <Header />
                <Container>
                    <div className="page">
                        <Outlet />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Layout
