import "./our-best.scss";

const OurBest = () => {
    return (
        <section className="ourBest">
            <h2 className="header">Our best</h2>
            <div className="formOne">
                <img
                    src="../../../img/ourBest/Presto.jpeg"
                    alt="Presto"
                    className="formImg"
                />
                <div className="formText">Presto Coffee Beans 1 kg</div>
                <div className="formCost">15.99$</div>
            </div>
            <div className="formTwo">
                <img
                    src="../../../img/ourBest/Solimo.jpeg"
                    alt="Presto"
                    className="formImg"
                />
                <div className="formText">Solimo Coffee Beans 2 kg</div>
                <div className="formCost">10.73$</div>
            </div>
            <div className="formThree">
                <img
                    src="../../../img/ourBest/Aromistico.jpeg"
                    alt="Presto"
                    className="formImg"
                />
                <div className="formText">AROMISTICO Coffee 1 kg</div>
                <div className="formCost">6.99$</div>
            </div>
        </section>
    );
};

export default OurBest;
