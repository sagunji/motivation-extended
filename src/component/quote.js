import React, { Component } from 'react';

const Quote = (props) => {
    return (
        <div className="block">
            <h2>{props.message}</h2>
        </div>
    );
}

export default Quote;