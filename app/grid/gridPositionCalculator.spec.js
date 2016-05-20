import { expect } from 'chai';
import gridPositionCalculator from './gridPositionCalculator';

describe('gridPositionCalculator', function() {
    it('should return x: 0, y: 0 for grid size 10 x 1 when at pixel x: 0, y: 0', function() {
        const grid = {
            numberOfCellsX: 10,
            numberOfCellsY: 10,
            cellWidth: 1,
            cellHeight: 1
        };

        const position = {
            x: 0,
            y: 0
        };

        const coord = gridPositionCalculator(grid, position);

        expect(coord).to.deep.equal({ x: 0, y: 0 });
    });

    it('should return x: 0, y: 0 for grid size 100 x 10 when at pixel x: 0, y: 0', function() {
        const grid = {
            numberOfCellsX: 100,
            numberOfCellsY: 100,
            cellWidth: 10,
            cellHeight: 10
        };

        const position = {
            x: 0,
            y: 0
        };

        const coord = gridPositionCalculator(grid, position);

        expect(coord).to.deep.equal({ x: 0, y: 0 });
    });

    it('should return x: 1, y: 1 for grid size 100 x 10 when at pixel x: 10, y: 10', function() {
        const grid = {
            numberOfCellsX: 100,
            numberOfCellsY: 100,
            cellWidth: 10,
            cellHeight: 10
        };

        const position = {
            x: 10,
            y: 10
        };

        const coord = gridPositionCalculator(grid, position);
 
        expect(coord).to.deep.equal({ x: 1, y: 1 });
    });

    it('should round down coordinates to whole number', function() {
        const grid = {
            numberOfCellsX: 100,
            numberOfCellsY: 100,
            cellWidth: 10,
            cellHeight: 10
        };

        const position = {
            x: 129,
            y: 66
        };

        const coord = gridPositionCalculator(grid, position);

        expect(coord).to.deep.equal({ x: 12, y: 6 });
    });
});