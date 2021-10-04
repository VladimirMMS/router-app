import { Link, NavLink } from 'react-router-dom'
import '../index.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClass='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink axact to="/about" activeClass='active'>About</NavLink>
                </li>
                <li>
                    <NavLink axact to="/contact" activeClass='active'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

