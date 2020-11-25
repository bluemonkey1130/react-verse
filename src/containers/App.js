import React, {Component, Fragment} from 'react'
import {Grid, Row, Block} from "../components/Grid/Grid";
import classes from './App.module.scss';
import Hero from "../components/Hero/Hero";
import PropTypes from 'prop-types';
import Text from "../components/Text/Text";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Hero/>
                <Text/>
            </Fragment>

        );
    }
}

App.propTypes = {};

export default App;

