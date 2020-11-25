import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Block, Grid, Row} from "../Grid/Grid";

class Tabs extends Component {

    render() {
        const tabsTemplate = (channel) => {
            return this.props.tabs
                .filter(targetChannel => targetChannel.channel === channel)
                .map((filteredChannel, index) => {
                    return (
                        <Block key={filteredChannel.id} colSpan={4}>
                            <img src={filteredChannel.img} alt=""/>
                            <h3>{filteredChannel.title}</h3>
                            <p>{filteredChannel.text}</p>
                        </Block>
                    )
                })
        }
        return (
            <Fragment>
                <Grid>
                    <Row width={'narrow'}>
                        <Block colSpan={4}>
                            <button onClick={() => this.props.clicked(1)} className={['tabLink']}>Channel One</button>
                        </Block>
                        <Block colSpan={4}>
                            <button onClick={() => this.props.clicked(2)} className={['tabLink']}>Channel Two</button>
                        </Block>
                        <Block colSpan={4}>
                            <button onClick={() => this.props.clicked(3)} className={['tabLink']}>Channel Three</button>
                        </Block>
                    </Row>
                    <Row width={'align-wide'} className={['pad-top-700']}>
                        {tabsTemplate(this.props.visibleTab)}
                    </Row>
                </Grid>
            </Fragment>
        )
    }
}

Tabs.propTypes = {};

export default Tabs;
