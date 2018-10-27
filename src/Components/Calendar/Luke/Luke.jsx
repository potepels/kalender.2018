import React, { Component } from 'react';
// import './Header.scss';

class Luke extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="c_header">
                Luke
                <h2>{this.props.hepp}</h2>
            </div>
        )
    }
}

export default Luke;