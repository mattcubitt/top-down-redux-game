export default function(state={}, action) {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
                x: action.x,
                y: action.y
            };
        default:
            return state;
    }
};