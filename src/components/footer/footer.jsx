import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="links">
                <div className="linksFirst">
                    <img
                        src="../../../img/footer/coffee-beans.svg"
                        alt="transparentBeans"
                        className="linksImg"
                    />
                    <Link to="/" className="linksText">
                        Coffee house
                    </Link>
                    <Link to="/ourCoffee" className="linksText">
                        Our coffee
                    </Link>
                    <Link to="/forYourPleasure" className="linksText">
                        For your pleasure
                    </Link>
                </div>
            </div>
            <div className="lines">
                <img
                    src="../../../img/aboutUs/Beansblack.svg"
                    alt="beansblack"
                />
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
            </div>
        </footer>
    );
};

export default Footer;
