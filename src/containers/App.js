import React, {Component} from 'react'
import {Grid, Row, Block} from "../components/Grid/Grid";
import logo from '../assets/logo.svg';
import classes from './App.module.css';

import PropTypes from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Grid className={classes.App}>
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

