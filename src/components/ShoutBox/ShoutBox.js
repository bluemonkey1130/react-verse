import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShoutBox extends Component {

    render() {
        return (
            <section className="grid-row bg-primary pad-top-900 pad-bottom-900">
                <div className="grid align-wide grid-gap-900">
                    <div className="frame">
                        <img src={this.props.content.img} alt=""/>
                    </div>
                    <div>
                        <h2 className="color-light">{this.props.content.title}</h2>
                        <p className="color-light">{this.props.content.text}</p>
                        <a className="button standard color-light" href="#">{this.props.content.buttonText}</a>
                    </div>
                </div>
            </section>
        );
    }
}

ShoutBox.propTypes = {};

export default ShoutBox;
