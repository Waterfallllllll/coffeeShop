import { Component } from "react";
import "./search-menu.scss";

class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            classNamesBrazil: "cardMenu__buttonFilter",
            classNamesKenya: "cardMenu__buttonFilter",
            classNamesColumbia: "cardMenu__buttonFilter",
        };
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    };

    onBrazil = () => {
        const data = this.state.data;

        this.setState({
            classNamesBrazil:
                "cardMenu__buttonFilter cardMenu__buttonFilter--active",
            classNamesKenya: "cardMenu__buttonFilter",
            classNamesColumbia: "cardMenu__buttonFilter",
        });

        const newData = data.filter((item) => {
            return item.country == "Brazil";
        });

        this.props.onChangeEmployee(newData);
    };

    onKenya = () => {
        const data = this.state.data;

        this.setState({
            classNamesBrazil: "cardMenu__buttonFilter",
            classNamesKenya:
                "cardMenu__buttonFilter cardMenu__buttonFilter--active",
            classNamesColumbia: "cardMenu__buttonFilter",
        });

        const newData = data.filter((item) => {
            return item.country == "Kenya";
        });

        this.props.onChangeEmployee(newData);
    };

    onColumbia = () => {
        const data = this.state.data;

        this.setState({
            classNamesBrazil: "cardMenu__buttonFilter",
            classNamesKenya: "cardMenu__buttonFilter",
            classNamesColumbia:
                "cardMenu__buttonFilter cardMenu__buttonFilter--active",
        });

        const newData = data.filter((item) => {
            return item.country == "Columbia";
        });

        this.props.onChangeEmployee(newData);
    };

    render() {
        return (
            <section className="cardMenu">
                <div className="cardMenu__filter">
                    <div className="cardMenu__search">
                        <div className="cardMenu__text">Looking for</div>
                        <input
                            type="text"
                            placeholder="start typing here..."
                            className="cardMenu__input"
                            onChange={this.onUpdateSearch}
                        />
                    </div>
                    <div className="cardMenu__choiseMenu">
                        <div className="cardMenu__text">Or filter</div>
                        <button
                            className={this.state.classNamesBrazil}
                            onClick={this.onBrazil}
                        >
                            Brazil
                        </button>
                        <button
                            className={this.state.classNamesKenya}
                            onClick={this.onKenya}
                        >
                            Kenya
                        </button>
                        <button
                            className={this.state.classNamesColumbia}
                            onClick={this.onColumbia}
                        >
                            Columbia
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchMenu;
