import React, { Component, PropTypes } from 'react'

import Player from '../player/player';

export default class Grid extends Component {
    render() {
        const { pitch } = this.props;
        const width = pitch.width * pitch.sizeX;
        const height = pitch.height * pitch.sizeY;

        return (
            <div className="grid" style={{width: width, height: height, top: -height}}>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
                <div className="grid inner" style={{width: pitch.sizeX - 2, height: pitch.sizeY - 2}}></div>
            </div>
        )
    }
}

Grid.propTypes = {
    pitch: PropTypes.object.isRequired
};