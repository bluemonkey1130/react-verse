import React, {Component} from 'react'
import {Row, Block, Grid} from "../Grid/Grid";
import classes from './Hero.module.scss';
import heroImg from '../../assets/images/hero.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class hero extends Component {
    // TODO: move state management to App.js
    state = {
        nav1: null,
        nav2: null,
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        let slides = null
        slides = (
            <Slider asNavFor={this.state.nav2}
                    arrows={false}
                    fade={true}
                    ref={slider => (this.slider1 = slider)}>
                {
                    this.props.slides.map((slide, index) => {
                            return (
                                <div key={slide.id}>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.content}</p>
                                    <a className={['button standard']} href='#'>{slide.buttonText}</a>
                                </div>
                            )
                        }
                    )
                }
            </Slider>
        )
        let sliderNav = null
        sliderNav = (
            <Slider asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    adaptiveHeight={true}
                    focusOnSelect={true}>
                {
                    this.props.slides.map((slide, index) => {
                            return (
                                <Block
                                    key={slide.id}
                                    colSpan={4}
                                    className='tab-link'>
                                    <button><span>{slide.id}.</span> {slide.tabTitle}</button>
                                </Block>
                            )
                        }
                    )
                }
            </Slider>
        )
        return (
            <Grid className={[classes.Hero, 'hero']}>
                <Row className={['slider']} align={['center']}>
                    {slides}
                </Row>
                <Row className='slider-nav'>
                    {sliderNav}
                </Row>
                <Row width='align-wide' className={['media']}>
                    <Block>
                        <img src={heroImg} alt='logo'/>
                    </Block>
                </Row>
            </Grid>
        )
    }
}

export default hero