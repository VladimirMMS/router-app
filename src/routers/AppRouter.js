import React from 'react'
import { BrowserRouter as Router ,Link,Route, Switch } from 'react-router-dom'
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
import PublicRoute from './PublicRoute'
import { Redirect } from 'react-router'

export default function AppRouter() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path = '/' component = {HomePage}/>
                <Route exact path = '/about' component = {AboutPage}/>
                <Route exact path = '/contact' component = {ContactPage}/>
                <Route exact path = '/profile/:username' component = {ProfilePage}/>
                <Route path = '/categories' component = {CategoriesRouter}/>
                <PublicRoute exact path = '/login' component = {LoginPage}/>
                <PublicRoute exact path = '/register' component = {RegisterPage}/>
                <PrivateRoute exact path = '/dashboard' component = {Dashboard}/>
                <PrivateRoute exact path = '/payments' component = {PaymentsPage}/>
                <Route path='/404' component = {NotFound}/> 
                    <Route path = "*">
                        <Redirect to= '/404'/>
                    </Route>  
            </Switch>
        </Router> 
    )
}

function CategoriesRouter() {
    return (
    <div>
        <ul>
            <li>
                <Link to='/categories'>All</Link>
            </li>
            <li>
            <Link to='/categories/thriller'>Thriller</Link>
            </li>
            <li>
                <Link to='/categories/action'>Action</Link>
            </li>
            
        </ul>
        <Switch>         
            <Route exact path = '/categories' component = {CategoryPage}/>
            <Route exact path = '/categories/action'> 
                <h1>Action</h1>
            </Route>
            <Route exact path = '/categories/thriller'>
                <h1>Thriller</h1>
            </Route>
            <Route path = "*">
                <Redirect to= '/404'/>
            </Route> 
        </Switch>
    </div>

    )
    
    
}
