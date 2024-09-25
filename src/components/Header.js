import { LOGO_URL } from "../utils/constants";

const Header = ()=> {
    return (
        <div className="header">
        <img
        className="logo"
        src={LOGO_URL}

        />
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};
export default Header;