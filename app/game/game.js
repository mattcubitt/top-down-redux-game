import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import gameState from './gameState';
import Pitch from '../pitch/pitch';
import movePlayer from '../player/movePlayer';
import _ from 'lodash';

@connect(gameState)
export default class Game extends Component {
    componentDidMount() {
        this.onTick();
    }

    onMovePlayer(event) {
        const { dispatch, player, pitch } = this.props;

        const targetPosition = { x: event.clientX, y: event.clientY };

        //var path = pathFinder(player.currentPosition, targetPosition, pitch.size);

        dispatch(movePlayer(player.currentPosition, targetPosition, pitch.size));
    }

    onTick() {
        const { dispatch, player } = this.props;
        const currentPosition = player.currentPosition;
        const targetPosition = player.targetPosition;

        if(targetPosition && !_.isEqual(currentPosition, targetPosition)) {
            //var nextPosition = transitionCalculator(currentPosition, currentPosition);

            //dispatch(transitionPlayer(nextPosition.x, nextPosition.y));
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
    player: PropTypes.object.isRequired
};