import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import pitchState from './pitchState';
import Player from '../player/player';
import { movePlayer } from '../player/movePlayer';

@connect(pitchState)
export default class Pitch extends Component {
    onMovePlayer(event) {
        const { dispatch } = this.props;

        dispatch(movePlayer(event.clientX, event.clientY));
    }

    render() {
        const { player } = this.props;

        return (
            <div className="pitch" onClick={(e) => this.onMovePlayer(e)}>
                <Player x={player.x} y={player.y}/>
            </div>
        )
    }
}

Pitch.propTypes = {
    player: PropTypes.object.isRequired
};