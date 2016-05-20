import React, { Component, PropTypes } from 'react'

export default class MoveTarget extends Component {

    render() {
        const { position } = this.props;

        if(position == null) {
            return (
                <div></div>
            )
        }

        return (
            <div className="moveTarget" style={{ left: position.x, top: position.y - 14 }}></div>
        )
    } 
}

MoveTarget.propTypes = {
    position: React.PropTypes.object.isRequired
};