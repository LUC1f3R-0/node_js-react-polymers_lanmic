import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../headers/MainHeader'

const Layout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}

export default Layout
