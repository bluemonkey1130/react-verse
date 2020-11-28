import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Map from "../Map/Map";

class Location extends Component {

    render() {
        const location = {
            address: '',
            lat: 40.713175,
            lng: -74.003433
        }
        return (
            <section className="grid-row">
                <div className="grid pad-top-900 pad-bottom-900">
                    <div className="center-large">
                        <div className="stack align-center">
                            <h2 className="h1">{this.props.content.title}</h2>
                            <h3>{this.props.content.contactNumber}</h3>
                            <a href='#' className={'button call-to-action'}>{this.props.content.buttonText}</a>
                        </div>
                    </div>
                </div>
                <div className="map grid align-wide">
                    <Map location={location} zoomLevel={14}/> {/* include it here */}
                </div>
            </section>
        );
    }
}

Location.propTypes = {};

export default Location;
