import React from 'react'
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutPage from '../pages/AboutPage'
import CategoryPage from '../pages/CategoryPage'
import ContactPage from '../pages/ContactPage'
import Dashboard from '../pages/Dashboard'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFound from '../pages/NotFound'
import PaymentsPage from '../pages/PaymentsPage'
import ProfilePage from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'

export default function AppRouter() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path = '/' component = {HomePage}/>
                <Route exact path = '/about' component = {AboutPage}/>
                <Route exact path = '/contact' component = {ContactPage}/>
                <Route exact path = '/profile/:username' component = {ProfilePage}/>
                <Route exact path = '/categories' component = {CategoryPage}/>
                <Route exact path = '/login' component = {LoginPage}/>
                <Route exact path = '/register' component = {RegisterPage}/>
                <PrivateRoute exact path = '/dashboard' component = {Dashboard}/>
                <PrivateRoute exact path = '/payments' component = {PaymentsPage}/>
                <Route path = '*' component = {NotFound}/>
            </Switch>
        </Router> 
    )
}
