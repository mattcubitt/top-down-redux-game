export const TRANSITION_PLAYER = 'TRANSITION_PLAYER';

export default function transitionPlayer(targetPosition) {
    return {
        type: TRANSITION_PLAYER,
        targetPosition
    }
}