import { Component } from "react";
import "./search-menu.scss";

class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            selectedCountry: null,
        };
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    };

    onFilterClick = (country) => {
        const { selectedCountry, data } = this.state;

        const newSelected = selectedCountry === country ? null : country;

        this.setState({ selectedCountry: newSelected });

        const filteredData = newSelected
            ? data.filter((item) => item.country === newSelected)
            : data;

        this.props.onChangeEmployee(filteredData);
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
                            className={`cardMenu__buttonFilter ${
                                this.state.selectedCountry === "Brazil"
                                    ? "cardMenu__buttonFilter--active"
                                    : ""
                            }`}
                            onClick={() => this.onFilterClick("Brazil")}
                        >
                            Brazil
                        </button>
                        <button
                            className={`cardMenu__buttonFilter ${
                                this.state.selectedCountry === "Kenya"
                                    ? "cardMenu__buttonFilter--active"
                                    : ""
                            }`}
                            onClick={() => this.onFilterClick("Kenya")}
                        >
                            Kenya
                        </button>
                        <button
                            className={`cardMenu__buttonFilter ${
                                this.state.selectedCountry === "Columbia"
                                    ? "cardMenu__buttonFilter--active"
                                    : ""
                            }`}
                            onClick={() => this.onFilterClick("Columbia")}
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
