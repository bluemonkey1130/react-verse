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
                            <figure>
                                <img src={filteredChannel.img} alt=""/>
                            </figure>
                            <h3>{filteredChannel.title}</h3>
                            <p>{filteredChannel.text}</p>
                            <a className="button standard" href="#">Link & Arrow</a>
                        </Block>
                    )
                })
        }

        let tabOne = 'filter-btn'
        let tabTwo = 'filter-btn'
        let tabThree = 'filter-btn'
        switch (this.props.visibleTab) {
            case 1:
                tabOne += ' active';
                break
            case 2:
                tabTwo += ' active';
                break
            case 3:
                tabThree += ' active';
                break
            default:
        }
        return (
            <Fragment>
                <Grid>
                    <Row width={'narrow'} className="tabs">
                        <Block colSpan={4}>
                            <button className={tabOne} onClick={() => this.props.clicked(1)}>Channel One</button>
                        </Block>
                        <Block colSpan={4}>
                            <button className={tabTwo} onClick={() => this.props.clicked(2)}>Channel Two</button>
                        </Block>
                        <Block colSpan={4}>
                            <button className={tabThree} onClick={() => this.props.clicked(3)}>Channel Three
                            </button>
                        </Block>
                    </Row>
                    <Row width={'align-wide'} className="tab-content pad-top-800 pad-bottom-800">
                        {tabsTemplate(this.props.visibleTab)}
                    </Row>
                </Grid>
            </Fragment>
        )
    }
}

Tabs.propTypes = {};

export default Tabs;
