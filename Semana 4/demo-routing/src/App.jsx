import React from 'react'
import { Route, Routes, Link } from 'react-router'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { LoginPage } from './pages/LoginPage'
import { AboutUs } from './pages/AboutUs'
import { TeamPage } from './pages/TeamPage'
import { CreateUser } from './pages/CreateUser'
import { EditUser } from './pages/EditUser'
import { NavBar } from './components/NavBar'

export const App = () => {
    return (
        <div>
            <NavBar />
            <h1>Demo Routing</h1>
            <hr />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />}>
                    <Route index element={<AboutUs/>} />
                    <Route path='team' element={<TeamPage/>}/>
                </Route>
                <Route path='/login' element={<LoginPage />} />
                <Route path='user'>
                    <Route path='create' element={<CreateUser/>}/>
                    <Route path='edit/:userid' element={<EditUser/>}/>
                </Route>

            </Routes>
            <Link to="/">HomePage</Link>
            <Link to="/about">AboutPage</Link>
            <Link to="/about/team">Team</Link>
        </div>
    )
}