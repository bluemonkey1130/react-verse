import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {

    render() {
        const tabsTemplate = (channel) => {
            return this.props.tabs
                .filter(targetChannel => targetChannel.channel === channel)
                .map((filteredChannel, index) => {
                    return (
                        <div key={filteredChannel.id}>
                            <figure>
                                <img src={filteredChannel.img} alt=""/>
                            </figure>
                            <h4>{filteredChannel.title}</h4>
                            <p>{filteredChannel.text}</p>
                            <a className="button standard" href="#">Link & Arrow</a>
                        </div>
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
            <section className="grid-row">
                <div className="tabs grid-layout narrow has-three-columns pad-bottom-900">
                        <button className={tabOne} onClick={() => this.props.clicked(1)}>Channel One</button>
                        <button className={tabTwo} onClick={() => this.props.clicked(2)}>Channel Two</button>
                        <button className={tabThree} onClick={() => this.props.clicked(3)}>Channel Three</button>
                </div>
                <div className="tab-content grid-layout has-three-columns pad-bottom-900">
                    {tabsTemplate(this.props.visibleTab)}
                </div>
            </section>

        )
    }
}

Tabs.propTypes = {};

export default Tabs;
