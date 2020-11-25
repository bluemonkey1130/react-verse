import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

class ShoutBox extends Component {

    render() {
        return (
            <Grid className="bg-primary pad-top-800 pad-bottom-800">
                <Row width={'align-wide'} gridGap={4}>
                    <Block colSpan={6}>
                        <img src={this.props.content.img} alt=""/>
                    </Block>
                    <Block colSpan={6}>
                        <h2 className="h1 color-light">{this.props.content.title}</h2>
                        <p className="color-light">{this.props.content.text}</p>
                        <a className="button standard color-light" href="#">{this.props.content.buttonText}</a>
                    </Block>
                </Row>
            </Grid>
        );
    }
}

ShoutBox.propTypes = {};

export default ShoutBox;
