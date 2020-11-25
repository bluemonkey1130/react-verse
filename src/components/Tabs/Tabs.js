import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {

    render() {
        return this.props.channelOne.map((tab, index) => { // Apply function to each item in array
            return (
                <div>
                    <h3>{tab.title}</h3>
                </div>
            )
        })
    }
}

Tabs.propTypes = {};

export default Tabs;
