import "./Header.scss";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <h1>Travel Site</h1>

            <nav className="header__links">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/hawaii">
                    <p>Hawaii</p>
                </Link>
                <Link to="/iceland">
                    <p>Iceland</p>
                </Link>
                <Link to="/greece">
                    <p>Greece</p>
                </Link>
            </nav>

        </header>
    )

}