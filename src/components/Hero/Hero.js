import React from 'react'
import {Row, Block, Grid} from "../Grid/Grid";
import classes from './Hero.module.scss';
import heroImg from '../../assets/images/hero.jpg';

const hero = (props) => {
    return (
        <Grid className={[classes.Hero, 'hero']}>
            <Row className={['slider']} align={['center']}>
                <Block colStart={4} colSpan={6}>
                    <h1>Here we have a two line display intro.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. </p>
                    <a className={'button standard'} href="#">Link & Arrow</a>
                </Block>
            </Row>
            <Row className='slider-nav'>
                <div className='tab-link'>
                    <button><span>1</span>Innovation</button>
                </div>
            </Row>
            <Row width='align-full' className={['media']}>
                <Block>
                    <img src={heroImg} alt='logo'/>
                </Block>
            </Row>
        </Grid>
    )
}
export default hero