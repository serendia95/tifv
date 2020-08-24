import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
class Header extends React.Component {
    render () {
        return (
            <nav id="navbarcuk" className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor:"#2F4F4F"}}>
                <div class="container navbar">
                    <h1 className="navbar-brand text-white" style={{marginRight:"50px"}}>
                        <Link activeClass="active"
                            to="appx"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-110}
                            duration={500}
                            isDynamic={true}>
                                Home
                        </Link>
                    </h1>   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-pills">
                            <a className="nav-link text-white">
                                <Link activeClass="active"
                                    to="aboutx"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-110}
                                    duration={500}
                                    isDynamic={true}>
                                        About
                                </Link>
                            </a>
                            <a className="nav-link text-white">
                                <Link activeClass="active"
                                    to="dashboardx"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-110}
                                    duration={500}
                                    isDynamic={true}>
                                        Dashboard
                                </Link>
                            </a>
                            <a className="nav-link text-white">
                                <Link activeClass="active"
                                    to="contactformx"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-110}
                                    duration={500}
                                    isDynamic={true}>
                                        Contact Us
                                </Link>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;