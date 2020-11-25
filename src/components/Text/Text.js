import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

class Text extends Component {
    state = {
        title: 'Here we have a two line display intro',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n' +
            'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonText:'Button Text'
    }

    render() {
        return (
            <Grid>
                <Row width={'narrow'} className={'pad-800 align-center'}>
                    <Block>
                        <h2 className={'h1'}>{this.state.title}</h2>
                        <p>{this.state.text}</p>
                        <a href='#' className={'button call-to-action'}>{this.state.buttonText}</a>
                    </Block>
                </Row>
            </Grid>
        );
    }
}

Text.propTypes = {};

export default Text;
