import { MOVE_PLAYER } from './movePlayer';
import { TRANSITION_PLAYER } from './transitionPlayer';

import pathFinder from '../player/pathFinder';

var initialState = {
    currentPosition: { x: 0, y: 0 }
};

export default function(state=initialState, action) {
    switch(action.type) {
        case TRANSITION_PLAYER:
            var path = state.path.slice(1, state.path.length);

            if(path.length === 0) {
                return {
                    currentPosition: action.targetPosition,
                    targetPosition: action.targetPosition,
                    path
                };
            }

            var pos = path[0];

            return {
                currentPosition: { x: pos[0], y: pos[1] },
                targetPosition: action.targetPosition,
                path
            };
        case MOVE_PLAYER:
            return {
                currentPosition: action.currentPosition,
                targetPosition: action.targetPosition,
                path: pathFinder(action.currentPosition, action.targetPosition, action.pitchSize)
            };
        default:
            return state;
    }
};