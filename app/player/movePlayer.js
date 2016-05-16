export const MOVE_PLAYER = 'MOVE_PLAYER';

export function movePlayer(x, y) {
    return {
        type: MOVE_PLAYER,
        x: x,
        y: y
    }
}