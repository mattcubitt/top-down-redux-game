export default function gridPositionCalculator(grid, position) {
    var coordX = position.x / grid.cellWidth;
    var coordY = position.y / grid.cellHeight;

    return {
        x: Math.floor(coordX),
        y: Math.floor(coordY)
    }
}