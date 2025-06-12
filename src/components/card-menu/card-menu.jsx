import "./card-menu.scss";

const CardMenu = () => {
    return (
        <section className="cardMenu">
            <div className="cardMenu__filter">
                <div className="cardMenu__search">
                    <div className="cardMenu__text">Looking for</div>
                    <input
                        type="text"
                        placeholder="start typing here..."
                        className="cardMenu__input"
                    />
                </div>
                <div className="cardMenu__choiseMenu">
                    <div className="cardMenu__text">Or filter</div>
                    <button className="cardMenu__buttonFilter">Brazil</button>
                    <button className="cardMenu__buttonFilter">Kenya</button>
                    <button className="cardMenu__buttonFilter">Columbia</button>
                </div>
            </div>
            <div className="cardMenu__cardGrid">
                <div className="cardMenu__card">
                    <img
                        src="../../../public/img/cardMenu/coffee.png"
                        alt=""
                        className="cardMenu__img"
                    />
                    <div className="cardMenu__title">
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className="cardMenu__country">Brazil</div>
                    <div className="cardMenu__price">6.99$</div>
                </div>
                <div className="cardMenu__card">
                    <img
                        src="../../../public/img/cardMenu/coffee.png"
                        alt=""
                        className="cardMenu__img"
                    />
                    <div className="cardMenu__title">
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className="cardMenu__country">Kenya</div>
                    <div className="cardMenu__price">6.99$</div>
                </div>
                <div className="cardMenu__card">
                    <img
                        src="../../../public/img/cardMenu/coffee.png"
                        alt=""
                        className="cardMenu__img"
                    />
                    <div className="cardMenu__title">
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className="cardMenu__country">Columbia</div>
                    <div className="cardMenu__price">6.99$</div>
                </div>
                <div className="cardMenu__card">
                    <img
                        src="../../../public/img/cardMenu/coffee.png"
                        alt=""
                        className="cardMenu__img"
                    />
                    <div className="cardMenu__title">
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className="cardMenu__country">Brazil</div>
                    <div className="cardMenu__price">6.99$</div>
                </div>
                <div className="cardMenu__card">
                    <img
                        src="../../../public/img/cardMenu/coffee.png"
                        alt=""
                        className="cardMenu__img"
                    />
                    <div className="cardMenu__title">
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className="cardMenu__country">Brazil</div>
                    <div className="cardMenu__price">6.99$</div>
                </div>
                <div className="cardMenu__card">
                    <img
                        src="../../../public/img/cardMenu/coffee.png"
                        alt=""
                        className="cardMenu__img"
                    />
                    <div className="cardMenu__title">
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className="cardMenu__country">Brazil</div>
                    <div className="cardMenu__price">6.99$</div>
                </div>
            </div>
        </section>
    );
};

export default CardMenu;
