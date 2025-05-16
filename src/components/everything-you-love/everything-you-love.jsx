import { Link } from "react-router-dom";
import "./everything-you-love.scss";

const EverythingYouLove = () => {
    return (
        <header className="promo">
            <div className="links">
                <div className="linksFirst">
                    <img
                        src="../../../img/everythingYouLove/transparentBeans.svg"
                        alt="transparentBeans"
                        className="linksImg"
                    />
                    <Link to="/" className="linksHouse">
                        Coffee house
                    </Link>
                    <Link to="/ourCoffee" className="linksOur">
                        Our coffee
                    </Link>
                    <Link to="/forYourPleasure" className="linksPleasure">
                        For your pleasure
                    </Link>
                </div>
            </div>
            <h1>Everything You Love About Coffee</h1>
            <div className="lineOne" />
            <img src="../../../img/everythingYouLove/Beans.svg" alt="beans" />
            <div className="lineTwo" />
            <h2 className="firsth2">
                We makes every day full of energy and taste
            </h2>
            <h2 className="secondh2">Want to try our beans?</h2>
            <button>More</button>
        </header>
    );
};
export default EverythingYouLove;
