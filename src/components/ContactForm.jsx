import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isSubmitted: false,
        email: '',
        hasEmailError: false,
        /* Add the states "content" and "hasContentError" */
        content: '',
        hasContentError: false,};
    }

    handleEmailChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
        email: inputValue,
        hasEmailError: isEmpty,});
    }

    /* Declare the method handleContentChange */
    handleContentChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
        content: inputValue,
        hasContentError: isEmpty,});
    }

    handleSubmit() {
        this.setState({isSubmitted: true});
    }

    render() {
        let emailErrorText;
        if (this.state.hasEmailError) {
        emailErrorText = (
            <p className='contact-message-error'>
                Please enter your email address
            </p>);
        }
        
        /* Declare the variable contentErrorText */
        let contentErrorText;
        
        /* Create an if statement with hasContentError as the condition */
        if (this.state.hasContentError) {
        contentErrorText = (
            <p className='contact-message-error'>
            Please enter your message
            </p>);
        }
        
        let contactForm;
        if (this.state.isSubmitted) {
            contactForm = (
                <div className="container contact-form">
                    <div className="row">
                        <div className="col text-center about-title">
                                <h4>Contact Us!</h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='contact-submit-message'>
                        Sent Successfully
                    </div>
                </div>);
        } else {
            contactForm = (
                <div className="container contact-form" style={{paddingBottom:"100px"}}>
                    <div className="row">
                        <div className="col text-center about-title" id="contactformx">
                                <h4>Contact Us!</h4>
                        </div>
                    </div>
                    <form onSubmit={() => {this.handleSubmit()}} 
                          style={{marginRight:"80px", marginLeft:"80px", marginTop:"40px"}}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email Address (required)</label>
                            <input value={this.state.email}
                                onChange={(event) => {this.handleEmailChange(event)}} 
                                type="email" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com">
                            </input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message (required)</label>
                            <textarea value={this.state.content}
                                    onChange={(event) => {this.handleContentChange(event)}}
                                    class="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    placeholder="Your Message"
                                    rows="3">
                            </textarea>
                        </div>
                        <div className="form-submit position-relative">
                            <input className="hehe" type='submit' value='Send'/>
                        </div>
                    </form>
                </div>);
        }
        
        return (
            <div className='contact-form'>
                {contactForm}
            </div>
        );
    }
}

export default ContactForm;