import React, { Component, PropTypes } from 'react'

export default class Player extends Component {

    render() {
        const { x, y } = this.props;

        return (
            <div className="player" style={{ top: x, left: y }}></div>
        )
    }
}

Player.propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
};