import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/UI/Footer';
import FiveDayForecast from './containers/FiveDayForecast';
import Header from './components/UI/Header';
import lazyLoader from './hoc/lazyLoader';

const asyncHourlyForecast = lazyLoader(() => {
    return import('./containers/HourlyForecast')
});

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="content">
                    <Switch>
                        <Route exact path="/hourly-forecast" component={asyncHourlyForecast}/>
                        <Route exact path="/" component={FiveDayForecast}/>
                    </Switch>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;