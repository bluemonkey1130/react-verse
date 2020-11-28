import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";
import Map from "../Map/Map";

class Location extends Component {

    render() {
        const location = {
            address: '',
            lat: 40.713175 ,
            lng: -74.003433
        }
        return (
            <Grid>
                <Row width="standard" className="pad-top-800 pad-bottom-800">
                    <Block colStart={3} colSpan={7} className="align-center">
                        <h2 className="h1">{this.props.content.title}</h2>
                        <h3>{this.props.content.contactNumber}</h3>
                        <a href='#' className={'button call-to-action'}>{this.props.content.buttonText}</a>
                    </Block>
                </Row>
                <Row width="align-wide" className="map">
                    <Block>
                        <Map location={location} zoomLevel={14} /> {/* include it here */}
                    </Block>
                </Row>
            </Grid>
        );
    }
}

Location.propTypes = {};

export default Location;
