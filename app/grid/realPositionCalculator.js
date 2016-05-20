export default function realPositionCalculator(grid, coord) {
    var coordX = (coord.x * grid.cellWidth) + (grid.cellWidth / 2) - 1;
    var coordY = (coord.y * grid.cellHeight) + (grid.cellHeight / 2) - 1;

    return {
        x: coordX < 0 ? 0 : coordX,
        y: coordY < 0 ? 0 : coordY
    }
}