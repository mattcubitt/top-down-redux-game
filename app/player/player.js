import React, { Component, PropTypes } from 'react';

import MoveTarget from './moveTarget';
import realPositionCalculator from '../grid/realPositionCalculator';

export default class Player extends Component {

    render() {
        const { player, pitch } = this.props;

        const currentPosition = realPositionCalculator(pitch, player.currentPosition);
        const targetPosition = player.targetPosition ? realPositionCalculator(pitch, player.targetPosition) : player.targetPosition;

        return (
            <div>
                <div className="player" style={{ left: currentPosition.x - 5, top: currentPosition.y - 5 }}></div>
                <MoveTarget position={targetPosition} />
            </div>
        )
    } 
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired
};