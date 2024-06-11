import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "./../../assets/logo.svg";
import "./style.scss";

const Header = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <div id="header" className={`container ${pathname === '/' ? 'home' : ''}`}>
                <Link to={`/`} className="header-logo">
                    <img src={Logo} alt="Marvel Search Heroes" className="logo" />
                    <p className="header-logo-text">Search Heroes</p>
                </Link>

                <div className="header-text">
                    <h1>EXPLORE O UNIVERSO</h1>
                    <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
                </div>

                <SearchBar />
            </div>
        </>

    );
};

export default Header;
