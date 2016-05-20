import React, { Component, PropTypes } from 'react'

import Player from '../player/player';

export default class Pitch extends Component {
    render() {
        const { pitch } = this.props;
        const width = pitch.numberOfCellsX * pitch.cellWidth;
        const height = pitch.numberOfCellsY * pitch.cellHeight;

        return (
            <div className="pitch" style={{width: width, height: height}} onClick={(e) => this.props.onMovePlayer(e)}>
                <Player {...this.props}/>
            </div>
        )
    }
}

Pitch.propTypes = {
    player: PropTypes.object.isRequired
};