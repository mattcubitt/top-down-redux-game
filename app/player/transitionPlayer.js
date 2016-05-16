export const TRANSITION_PLAYER = 'TRANSITION_PLAYER';

export default function transitionPlayer(x, y) {
    return {
        type: TRANSITION_PLAYER,
        x: x,
        y: y
    }
}