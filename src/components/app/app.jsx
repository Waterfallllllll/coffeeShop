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

import "./app.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        </Route>
                        <Route exact path="/forYourPleasure"></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
