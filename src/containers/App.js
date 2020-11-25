import React, {Component, Fragment} from 'react'
import Hero from "../components/Hero/Hero";
import PropTypes from 'prop-types';
import Text from "../components/Text/Text";
import Tabs from "../components/Tabs/Tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
    // constructor(props) {
    //     super();
    //     this.tabHandler = this.tabHandler.bind(this);
    // }
    state = {
        slides: [
            {
                id: '1',
                tabTitle: 'Innovation Partner',
                title: 'Here we have a two line display intro veniam',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
                    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n' +
                    'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                buttonText: 'Link & Arrow'
            },
            {
                id: '2',
                tabTitle: 'Top Class Team',
                title: 'Qui Thing nearly item region official hour very.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
                    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n' +
                    'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                buttonText: 'Link & Arrow'
            },
            {
                id: '3',
                tabTitle: 'Corporate Solutions',
                title: 'Nisi recusandae veniam minus deleniti unit nation.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
                    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n' +
                    'llamco laboris nisi ut aliquip ex ea commodo consequat.',
                buttonText: 'Link & Arrow'
            }
        ],
        nav1: null,
        nav2: null,
        textArea: {
            title: 'Here we have a two line display intro',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
                'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            buttonText: 'Button Text'
        },
        tabs: [
            {
                id: '13050',
                channel: 1,
                title: 'Channel One container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '05948',
                channel: 1,
                title: 'Channel One container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '08487',
                channel: 1,
                title: 'Channel One container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '130340',
                channel: 2,
                title: 'Channel Two container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '054348',
                channel: 2,
                title: 'Channel Two container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '08237',
                channel: 2,
                title: 'Channel Two container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '13170',
                channel: 3,
                title: 'Channel Three container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '00448',
                channel: 3,
                title: 'Channel Three container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '08448',
                channel: 3,
                title: 'Channel Three container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            }
        ],
        visibleTab: 2
    }
    tabHandler = (index) => {
        this.setState({
            visibleTab: index
        })
    }

    render() {
        return (
            <Fragment>
                <Hero
                    slides={this.state.slides}/>
                <Text
                    content={this.state.textArea}/>
                <Tabs
                    clicked={this.tabHandler}
                    visibleTab={this.state.visibleTab}
                    tabs={this.state.tabs}/>
            </Fragment>

        );
    }
}

App.propTypes = {};

export default App;

