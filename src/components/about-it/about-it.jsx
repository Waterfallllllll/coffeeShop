import "./about-it.scss";
import { useLocation } from "react-router-dom";

const AboutIt = () => {
    const location = useLocation();
    const country = location.state.country;
    const price = location.state.price;
    return (
        <div className="aboutIt">
            <img
                src="../../../public/img/aboutIt/Aromistico.jpeg"
                alt="Aromistico"
                className="aboutIt__img"
            />
            <div className="aboutIt__wrapper">
                <h2>About it</h2>
                <div className="aboutIt__lines">
                    <img
                        src="../../../img/aboutUs/Beansblack.svg"
                        alt="beansblack"
                    />
                    <div className="aboutIt__lineOne"></div>
                    <div className="aboutIt__lineTwo"></div>
                </div>
                <div className="aboutIt__country">
                    <span className="aboutIt__bold">Country:</span> {country}
                </div>
                <div className="aboutIt__description">
                    <span className="aboutIt__bold">Description:</span> Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="aboutIt__price">
                    <span className="aboutIt__bold">Price:</span>{" "}
                    <span className="aboutIt__upperCase">{price}$</span>
                </div>
            </div>
        </div>
    );
};

export default AboutIt;
