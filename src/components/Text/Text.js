import React from 'react';
import {Block, Grid, Row} from "../Grid/Grid";

const Text = (props) => {

    return (
        <section className="grid-row">
            <div className="grid pad-900 align-center">
                <div>
                    <h2 className={'h1'}>{props.content.title}</h2>
                    <p>{props.content.text}</p>
                    <a href='#' className={'button call-to-action'}>{props.content.buttonText}</a>
                </div>
            </div>
        </section>
    );
}

export default Text;
