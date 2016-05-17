import pathFinder from './pathFinder';
import { expect } from 'chai';
import { Grid, AStarFinder } from 'pathfinding';

describe('pathFinder', function() {
    it('can generate path', function() {
        var gridSize = {
            width: 10,
            height: 10
        };

        var currentPosition = {
            x: 0,
            y: 0
        };

        var targetPosition = {
            x: 9,
            y: 9
        };

        var path = pathFinder(currentPosition, targetPosition, gridSize);

        expect(path.length).to.equal(10);
        expect(path[0]).to.deep.equal([0, 0]);
        expect(path[9]).to.deep.equal([9, 9]);
    });
});