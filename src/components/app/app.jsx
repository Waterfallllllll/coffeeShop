import { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import EverythingYouLove from "../everything-you-love/everything-you-love";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";
import OurCoffee from "../our-coffee/our-coffee";
import AboutOurBeans from "../about-our-beans/about-our-beans";
import SearchMenu from "../search-menu/search-menu";
import CardMenu from "../card-menu/card-menu";
import AboutIt from "../about-it/about-it";

import "./app.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: 6.99,
                    id: 1,
                },
                {
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Kenya",
                    price: 6.99,
                    id: 2,
                },
                {
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Columbia",
                    price: 6.99,
                    id: 3,
                },
                {
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: 6.99,
                    id: 4,
                },
                {
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: 6.99,
                    id: 5,
                },
                {
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: 6.99,
                    id: 6,
                },
            ],
            term: "",
        };
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term });
    };

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.country.indexOf(term) > -1;
        });
    };

    onChangeCountry = (data) => {
        this.setState({ data });
    };

    render() {
        const { data, term } = this.state;
        const visibleData = this.searchEmp(data, term);

        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path="/">
                            <EverythingYouLove></EverythingYouLove>
                            <AboutUs></AboutUs>
                            <OurBest></OurBest>
                            <Footer></Footer>
                        </Route>
                        <Route exact path="/ourCoffee">
                            <OurCoffee></OurCoffee>
                            <AboutOurBeans></AboutOurBeans>
                            <SearchMenu
                                onUpdateSearch={this.onUpdateSearch}
                                onChangeEmployee={this.onChangeCountry}
                                data={data}
                            ></SearchMenu>
                            <CardMenu data={visibleData}></CardMenu>
                            <Footer></Footer>
                        </Route>
                        <Route exact path="/ourCoffee/aboutIt">
                            <OurCoffee></OurCoffee>
                            <AboutIt></AboutIt>
                            <Footer></Footer>
                        </Route>
                        <Route exact path="/forYourPleasure"></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
