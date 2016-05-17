import { Grid, AStarFinder } from 'pathfinding';

export default function pathFinder(currentPosition, targetPosition, grid) {
    var grid = new Grid(grid.width, grid.height);

    var finder = new AStarFinder({
        allowDiagonal: true
    });

    return finder.findPath(currentPosition.x, currentPosition.y, targetPosition.x, targetPosition.y, grid);
}