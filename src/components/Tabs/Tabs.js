import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

class Tabs extends Component {


    render() {
        const tabsTemplate = (channel)=> {
            return this.props.tabs
                .filter(targetChannel => targetChannel.channel === channel)
                .map((filteredChannel, index) => {
                    return (
                        <Block key={filteredChannel.id} colSpan={4}>
                            <img src={filteredChannel.img} alt=""/>
                            <h3>{channel}{filteredChannel.title}</h3>
                            <p>{filteredChannel.text}</p>
                        </Block>
                    )
                })
        }

        return (
            <Grid>
                <Row>
                    {tabsTemplate(1)}
                </Row>
                <Row>
                    {tabsTemplate(2)}
                </Row>
                <Row>
                    {tabsTemplate(3)}
                </Row>
            </Grid>
        )
    }
}

Tabs.propTypes = {};

export default Tabs;
