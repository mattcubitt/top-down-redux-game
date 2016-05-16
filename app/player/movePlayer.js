export const MOVE_PLAYER = 'MOVE_PLAYER';

export default function movePlayer(currentPosition, targetPosition, pitchSize) {
    return {
        type: MOVE_PLAYER,
        currentPosition,
        targetPosition,
        pitchSize
    }
}