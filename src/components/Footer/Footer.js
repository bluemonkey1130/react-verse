import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

class Footer extends Component {

    render() {
        return (
            <footer className="footer grid-row">
                <div className="grid-layout alignwide contact">
                    <div className="block">
                        <h3></h3>
                    </div>
                    <nav className="nav">
                        <h3>{this.props.content.channelOneTitle}</h3>

                    </nav>
                    <nav className="nav">

                    </nav>
                    <div className="social">
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                        <a href=""><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
                <div className="grid-layout alignwide has-two-columns strapline">
                    <div className="block">

                    </div>
                    <nav className="nav">

                    </nav>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;
