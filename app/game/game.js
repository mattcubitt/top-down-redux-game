import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import gameState from './gameState';
import Pitch from '../pitch/pitch';
import movePlayer from '../player/movePlayer';
import _ from 'lodash';
import transitionPlayer from '../player/transitionPlayer';
import gridPositionCalculator from '../grid/gridPositionCalculator';
import Grid from '../grid/grid';

@connect(gameState)
export default class Game extends Component {
    componentDidMount() {
        this.onTick();
    }

    onMovePlayer(event) {
        const { dispatch, player, pitch } = this.props;
        const position = { x: event.clientX - event.target.offsetLeft, y: event.clientY - event.target.offsetTop };
        const targetPosition = gridPositionCalculator(pitch, position);
        const size = {
            width: pitch.numberOfCellsX,
            height: pitch.numberOfCellsY
        };

        dispatch(movePlayer(player.currentPosition, targetPosition, size));
    }

    onTick() {
        const { dispatch, player } = this.props;
        const currentPosition = player.currentPosition;
        const targetPosition = player.targetPosition;

        if(targetPosition && !_.isEqual(currentPosition, targetPosition)) {
            dispatch(transitionPlayer(targetPosition));
        }

        window.requestAnimationFrame(this.onTick.bind(this));
    }

    render() {
        return (
            <div>
                <Pitch {...this.props} onMovePlayer={this.onMovePlayer.bind(this)}/>
            </div>
        )
    }
}

Game.propTypes = {
    player: PropTypes.object.isRequired,
    pitch: PropTypes.object.isRequired
};