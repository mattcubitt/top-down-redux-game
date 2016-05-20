import { expect } from 'chai';
import realPositionCalculator from './realPositionCalculator';

describe('realPositionCalculator', function() {
    it('should return pixel x: 0, y: 0 for grid size 10 x 1 when at coord x: 0, y: 0', function() {
        var grid = {
            numberOfCellsX: 10,
            numberOfCellsY: 10,
            cellWidth: 1,
            cellHeight: 1
        };

        var coord = {
            x: 0,
            y: 0
        };

        var position = realPositionCalculator(grid, coord);

        expect(position).to.deep.equal({ x: 0, y: 0 });
    });

    it('should return pixel x: 4, y: 4 for grid size 100 x 10 when at coord x: 0, y: 0', function() {
        var grid = {
            numberOfCellsX: 100,
            numberOfCellsY: 100,
            cellWidth: 10,
            cellHeight: 10
        };

        var coord = {
            x: 0,
            y: 0
        };

        var position = realPositionCalculator(grid, coord);

        expect(position).to.deep.equal({ x: 4, y: 4 });
    });

    it('should return pixel x: 14, y: 4 for grid size 100 x 10 when at coord x: 1, y: 0', function() {
        var grid = {
            numberOfCellsX: 100,
            numberOfCellsY: 100,
            cellWidth: 10,
            cellHeight: 10
        };

        var coord = {
            x: 0,
            y: 0
        };

        var position = realPositionCalculator(grid, coord);

        expect(position).to.deep.equal({ x: 4, y: 4 });
    });

    it('should return pixel x: 2, y: 0 for grid size 100 x 3 when at coord x: 2, y: 0', function() {
        var grid = {
            numberOfCellsX: 3,
            numberOfCellsY: 3,
            cellWidth: 100,
            cellHeight: 100
        };

        var coord = {
            x: 2,
            y: 0
        };

        var position = realPositionCalculator(grid, coord);

        var realPosition = {
            x: 249,
            y: 49
        };

        expect(position).to.deep.equal(realPosition);
    });
});