import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

class Footer extends Component {

    render() {
        const navItems = (channel) => {
            return this.props.content.navList
                .filter(targetNav => targetNav.channel === channel)
                .map((filteredNav, index) => {
                    return (
                        <li><a
                            key={filteredNav.id}
                            href="#"
                            className="nav-link button">{filteredNav.navText}</a></li>
                    )
                })
        }

        return (
            <Grid className="footer pad-top-600">
                <Row width="align-wide" className="contact pad-top-600">
                    <Block colSpan={3}>
                        <h3>Contact</h3>
                        <p>{this.props.content.address}</p>
                        <a href="#">{this.props.content.email}</a>
                        <p>Tel: {this.props.content.telephone}</p>
                    </Block>
                    <Block colSpan={3} className="nav">
                        <h3>{this.props.content.channelOneTitle}</h3>
                        <ul>
                            {navItems(1)}
                        </ul>
                    </Block>
                    <Block colSpan={3} className="nav">
                        <h3>{this.props.content.channelTwoTitle}</h3>
                        <ul>
                            {navItems(2)}
                        </ul>
                    </Block>
                    <Block colSpan={3} className="social">
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                        <a href=""><i className="fab fa-facebook"></i></a>
                    </Block>
                </Row>
            </Grid>
        );
    }
}

Footer.propTypes = {};

export default Footer;
