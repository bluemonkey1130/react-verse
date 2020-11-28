import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            <footer className="grid-row footer">
                <div className="grid align-wide has-five-columns contact pad-top-600 pad-bottom-600">
                    <div className="block">
                        <h4>Contact</h4>
                        <p>{this.props.content.address}</p>
                        <a href="#">{this.props.content.email}</a>
                        <p>Tel: {this.props.content.telephone}</p>
                    </div>
                    <nav className="nav">
                        <h4>{this.props.content.channelOneTitle}</h4>
                        <ul>
                            {navItems(1)}
                        </ul>
                    </nav>
                    <nav className="nav">
                        <h4>{this.props.content.channelTwoTitle}</h4>
                        <ul>
                            {navItems(2)}
                        </ul>
                    </nav>
                    <div className="social">
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                        <a href=""><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
                <div className="grid align-wide strap-line">
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
