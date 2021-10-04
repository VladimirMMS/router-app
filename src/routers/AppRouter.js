import React from 'react'
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutPage from '../pages/AboutPage'
import CategoryPage from '../pages/CategoryPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import ProfilePage from '../pages/ProfilePage'


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
                <Route path = '*' component = {NotFound}/>
            </Switch>
        </Router> 
    )
}
