import {  NavLink } from 'react-router-dom'
import '../index.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeClassName='active'>About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName='active'>Contact</NavLink>
                </li>
                <li>
                    <NavLink exact to="/categories" activeClassName='active'>CategoryPage</NavLink>
                </li>
            </ul>
        </nav>
    )
}

