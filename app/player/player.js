import React, { Component, PropTypes } from 'react';

import MoveTarget from './moveTarget';

export default class Player extends Component {

    render() {
        const { player } = this.props;
        const { currentPosition } = player;
        const { targetPosition } = player;

        return (
            <div>
                <div className="player" style={{ left: currentPosition.x, top: currentPosition.y }}></div>
                <MoveTarget position={targetPosition} />
            </div>
        )
    } 
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired
};