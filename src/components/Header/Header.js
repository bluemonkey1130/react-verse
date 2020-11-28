import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        const navItems = (align) => {
            return this.props.nav
                .filter(targetNav => targetNav.align === align)
                .map((filteredNav, index) => {
                    return (
                        <a
                            key={filteredNav.id}
                            href="#"
                            className="nav-link">{filteredNav.navText}</a>
                    )
                })
        }


        return (
            <section className="grid-row header">
                <div className="grid align-wide has-three-columns">
                    <nav className="nav">
                        {navItems('left')}
                    </nav>
                    <a href="#" className="logo">
                        <i className="fas fa-image"></i>
                    </a>
                    <nav className="nav">
                        {navItems('right')}
                    </nav>
                </div>
            </section>
        );
    }
}

Header.propTypes = {};

export default Header;
