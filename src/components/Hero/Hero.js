import React, {Component} from 'react'
import heroImg from '../../assets/images/hero.jpg';
import Slider from "react-slick";

class hero extends Component {

    componentDidMount = () => {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        let slides = null
        slides = (
            <Slider asNavFor={this.slider2}
                    arrows={false}
                    fade={true}
                    ref={slider => (this.slider1 = slider)}>
                {
                    this.props.slides.map((slide, index) => {
                            return (
                                <div className="center-large" key={slide.id}>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.content}</p>
                                    <a className="button standard gap-top-400" href='#'>{slide.buttonText}</a>
                                </div>
                            )
                        }
                    )
                }
            </Slider>
        )
        let sliderNav = null
        sliderNav = (
            <Slider asNavFor={this.slider1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    adaptiveHeight={true}
                    focusOnSelect={true}>
                {
                    this.props.slides.map((slide, index) => {
                            return (
                                <div
                                    key={slide.id}
                                    colSpan={4}
                                    className='tab-link'>
                                    <button><span>{slide.id}.</span> {slide.tabTitle}</button>
                                </div>
                            )
                        }
                    )
                }
            </Slider>
        )
        return (
            <section className="hero grid-row">
                <div className="grid slider">
                    {slides}
                </div>
                <div className='grid slider-nav'>
                    {sliderNav}
                </div>
                <div className="grid align-full media">
                    <div>
                        <img src={heroImg} alt='logo'/>
                    </div>
                </div>
            </section>
        )
    }
}

export default hero