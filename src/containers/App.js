import React, {Component} from 'react'
import {Grid, Row, Block} from "../components/Grid/Grid";
import logo from '../assets/logo.svg';
import classes from './App.module.scss';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <Grid className={[classes.App, 'bg-quaternary']}>
                <Row>
                    <Block colSpan={4}>
                        <img src={logo} alt="logo"/>
                    </Block>
                    <Block colSpan={4}>
                        <img src={logo} alt="logo"/>
                    </Block>
                    <Block colSpan={4}>
                        <img src={logo} alt="logo"/>
                    </Block>
                </Row>
            </Grid>
        );
    }
}

App.propTypes = {};

export default App;

