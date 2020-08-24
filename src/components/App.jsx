import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx'
import Footer from './Footer.jsx';
import '../App.css';

class App extends React.Component {
    render () {
        return (
            <div className="apps" id="appx">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;
