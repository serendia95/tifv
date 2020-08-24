import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx';
import './App.css';

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
