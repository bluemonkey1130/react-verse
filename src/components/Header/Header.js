import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

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
            <Grid className="header">
                <Row width='align-wide'>
                    <Block colSpan={5}>
                        <nav className="nav">
                            {navItems('left')}
                        </nav>
                    </Block>
                    <Block colSpan={2}>
                        <a href="#" className="logo">
                            <i className="fas fa-image"></i>
                        </a>
                    </Block>
                    <Block colSpan={5}>
                        <nav className="nav">
                            {navItems('right')}
                        </nav>
                    </Block>
                </Row>
            </Grid>
        );
    }
}

Header.propTypes = {};

export default Header;
