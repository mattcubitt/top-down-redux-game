import React, { Component, PropTypes } from 'react'

import Player from '../player/player';

export default class Pitch extends Component {
    render() {
        const { pitch } = this.props;

        return (
            <div className="pitch" style={{width: pitch.size.width, height: pitch.size.height}} onClick={(e) => this.props.onMovePlayer(e)}>
                <Player {...this.props}/>
            </div>
        )
    }
}

Pitch.propTypes = {
    player: PropTypes.object.isRequired
};