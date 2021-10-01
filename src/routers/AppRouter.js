import React from 'react'
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'



export default function AppRouter() {
    return (
        <Router>
            <Navbar/>
            <Switch>
            <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route path='/about'>
                    <AboutPage/>
                </Route>
                <Route path = '/contact'>
                    <ContactPage/>
                </Route>
                <Route path = '*'>
                    <NotFound/>
                </Route>
            </Switch>
        </Router> 
    )
}
