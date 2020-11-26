import React, {Component, Fragment} from 'react'
import Hero from "../components/Hero/Hero";
import Text from "../components/Text/Text";
import Tabs from "../components/Tabs/Tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoutBox from "../components/ShoutBox/ShoutBox";
import Location from "../components/Location/Location";
import Header from "../components/Header/Header";

class App extends Component {
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
                    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
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
                img: 'https://images.unsplash.com/photo-1485180956642-f7a1e702cba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2490&q=80'
            },
            {
                id: '054348',
                channel: 2,
                title: 'Channel Two container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1485180956642-f7a1e702cba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2490&q=80'
            },
            {
                id: '08237',
                channel: 2,
                title: 'Channel Two container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1485180956642-f7a1e702cba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2490&q=80'
            },
            {
                id: '13170',
                channel: 3,
                title: 'Channel Three container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1459787954914-2bb34260918d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '00448',
                channel: 3,
                title: 'Channel Three container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1459787954914-2bb34260918d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            },
            {
                id: '08448',
                channel: 3,
                title: 'Channel Three container title stretching two lines.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                img: 'https://images.unsplash.com/photo-1459787954914-2bb34260918d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
            }
        ],
        visibleTab: 2,
        shoutContent: {
            title: 'Here we have a two line display intro',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
                'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n' +
                'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            buttonText: 'Link & Arrow'
        },
        locationContent: {
            title: 'A message followed by a way to get in touch',
            contactNumber: '+(0) 1234 567 890',
            buttonText: 'Button Text'
        },
        navItems: [
            {id: '18010', navText: 'About us', align: 'left'},
            {id: '18011', navText: 'Services', align: 'left'},
            {id: '18012', navText: 'Case Studies', align: 'left'},
            {id: '18013', navText: 'Contact', align: 'right'},
            {id: '18014', navText: 'Navigation', align: 'right'},
            {id: '18015', navText: 'Navigation', align: 'right'},
        ]
    }
    tabHandler = (index) => {
        this.setState({
            visibleTab: index
        })
    }

    render() {
        return (
            <Fragment>
                <Header
                    nav={this.state.navItems}/>
                <Hero
                    slides={this.state.slides}/>
                <Text
                    content={this.state.textArea}/>
                <Tabs
                    clicked={this.tabHandler}
                    visibleTab={this.state.visibleTab}
                    tabs={this.state.tabs}/>
                <ShoutBox
                    content={this.state.shoutContent}/>
                <Location
                    content={this.state.locationContent}/>
            </Fragment>

        );
    }
}

export default App;

