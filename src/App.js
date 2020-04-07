import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import FiveDayForecast from './containers/FiveDayForecast';
import HourlyForecast from './containers/HourlyForecast';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="content">
                    <Switch>
                        <Route exact path="/hourly-forecast" component={HourlyForecast}/>
                        <Route exact path="/" component={FiveDayForecast}/>
                    </Switch>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;