import React, {Component} from 'react'
import {Grid, Row, Block} from "../components/Grid/Grid";
import classes from './App.module.scss';
import Hero from "../components/Hero/Hero";
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (

            <Hero/>

        );
    }
}

App.propTypes = {};

export default App;

