import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Weather from './containers/Weather';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="maxWidth">
                    <Weather/>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;