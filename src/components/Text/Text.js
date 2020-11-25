import React from 'react';
import {Block, Grid, Row} from "../Grid/Grid";

const Text = (props) => {

    return (
        <Grid>
            <Row width={'narrow'} className={'pad-top-800 pad-bottom-800 align-center'}>
                <Block>
                    <h2 className={'h1'}>{props.content.title}</h2>
                    <p>{props.content.text}</p>
                    <a href='#' className={'button call-to-action'}>{props.content.buttonText}</a>
                </Block>
            </Row>
        </Grid>
    );
}

export default Text;
