import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import FiveDayForecast from './containers/FiveDayForecast';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="content">
                    <FiveDayForecast/>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;