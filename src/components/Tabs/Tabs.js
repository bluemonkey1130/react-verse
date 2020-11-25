import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

class Tabs extends Component {

    render() {

        let tabsTemplate = this.props.tabs
            .filter(targetChannel => targetChannel.channel === 1)
            .map((filteredChannel, index) => {
            return (
                <Block key={filteredChannel.id} colSpan={4}>
                    <img src={filteredChannel.img} alt=""/>
                    <h3>{filteredChannel.title}</h3>
                    <p>{filteredChannel.text}</p>
                </Block>
            )
        })

        return (
            <Grid>
                <Row>
                    {tabsTemplate}
                </Row>
            </Grid>
        )
    }
}

Tabs.propTypes = {};

export default Tabs;
