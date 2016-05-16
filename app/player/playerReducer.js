import { MOVE_PLAYER } from './movePlayer';
import { TRANSITION_PLAYER } from './transitionPlayer';

import pathFinder from '../player/pathFinder';

var initialState = {
    currentPosition: { x: 0, y: 0 }
};

export default function(state=initialState, action) {
    switch(action.type) {
        // case TRANSITION_PLAYER:
        //     return {
        //         ...state,
        //         currentPosition: {
        //             x: action.x,
        //             y: action.y
        //         }
        //     };
        case MOVE_PLAYER:
            var path = pathFinder(action.currentPosition, action.targetPosition, action.pitchSize);
            
            return {
                currentPosition: action.currentPosition,
                targetPosition: action.targetPosition,
                path
            };
        default:
            return state;
    }
};