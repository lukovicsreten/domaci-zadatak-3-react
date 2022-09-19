import '../../../App.css';
import { Link } from "react-router-dom";

// 2. Prva reusable komponenta koja prikazuje navigacioni bar na osnovu atributa koji dolaze iz parent komponente
export const Navbar = (props) => {
    return (
        <nav className="nav-bar">
            {props.isHomePage && <Link className='link' to="/login">Back to Login Page</Link>}
            {props.isLoginPage && <Link className='link' to="/home">Continue to Home Page</Link>}
        </nav>
    )
}