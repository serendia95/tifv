import React from 'react';
import About from './About.jsx';
import Dashboard from './Dashboard.jsx';
import ContactForm from './ContactForm.jsx';

class Main extends React.Component {
    render () {
        return (
            <div className="main">
                <h1 className="title text-center">Title</h1>
                <About />
                <Dashboard />
                <ContactForm />
            </div>
        )
    }
}
  
export default Main;