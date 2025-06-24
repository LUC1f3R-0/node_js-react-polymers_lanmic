import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Home from '../view/Home'
import About from '../view/About'
import Service from '../view/Service'
import Team from '../view/Team'
import Contact from '../view/Contact'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='service' element={<Service />} />
                <Route path='team' element={<Team />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes >
    )
}

export default AppRoutes
