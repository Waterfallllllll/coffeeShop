import CardMenuItem from "../card-menu-item/card-menu-item";
import "./card-menu.scss";

const CardMenu = ({ data }) => {
    const elements = data.map((item) => {
        const { id, ...props } = item;
        return <CardMenuItem key={id} {...props}></CardMenuItem>;
    });

    return <div className="cardMenu__cardGrid">{elements}</div>;
};

export default CardMenu;
