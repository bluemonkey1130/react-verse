import React from 'react';

const Text = (props) => {

    return (
        <section className="grid-row">
            <div className="grid">
                <div className="center-large">
                    <div className="stack align-center pad-top-900 pad-bottom-900">
                        <h2 className={'h1'}>{props.content.title}</h2>
                        <p>{props.content.text}</p>
                        <a href='#' className={'button call-to-action'}>{props.content.buttonText}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Text;
