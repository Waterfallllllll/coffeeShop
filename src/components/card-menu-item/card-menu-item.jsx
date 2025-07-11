import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./card-menu-item.scss";

const CardMenuItem = (props) => {
    const { title, country, price } = props;

    return (
        <Link
            to={{
                pathname: "/ourCoffee/aboutIt",
                state: { country, price },
            }}
            className="cardMenu__card"
        >
            <img
                src="../../../public/img/cardMenu/coffee.png"
                alt=""
                className="cardMenu__img"
            />
            <div className="cardMenu__title">{title}</div>
            <div className="cardMenu__country">{country}</div>
            <div className="cardMenu__price">{price}$</div>
        </Link>
    );
};

export default CardMenuItem;
