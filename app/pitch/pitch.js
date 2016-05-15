import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import Player from '../player/player';

export default class Pitch extends Component {
    movePlayer(event) {
        const { dispatch } = this.props;

        dispatch({
            type: 'MOVE_PLAYER',
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        const { player } = this.props;

        return (
            <div className="pitch" onClick={(e) => this.movePlayer(e)}>
                <Player x={player.x} y={player.y}/>
            </div>
        )
    }
}

Pitch.propTypes = {
    player: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        player: state.player
    }
}
export default connect(mapStateToProps)(Pitch)