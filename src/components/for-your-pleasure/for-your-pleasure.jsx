import "./for-your-pleasure.scss";
import { Link } from "react-router-dom";

const ForYourPleasure = () => {
    return (
        <header className="ourCoffee">
            <div className="ourCoffee__links">
                <div className="ourCoffee__links-first">
                    <img
                        src="../../../img/everythingYouLove/transparentBeans.svg"
                        alt="transparentBeans"
                        className="ourCoffee__links-img"
                    />
                    <Link to="/" className="ourCoffee__links-house">
                        Coffee house
                    </Link>
                    <Link to="/ourCoffee" className="ourCoffee__links-our">
                        Our coffee
                    </Link>
                    <Link
                        to="/forYourPleasure"
                        className="ourCoffee__links-pleasure"
                    >
                        For your pleasure
                    </Link>
                </div>
            </div>
            <h1 className="ourCoffee__header">For your pleasure</h1>
        </header>
    );
};

export default ForYourPleasure;
