import { expect } from 'chai';
import playerReducer from './playerReducer';
import movePlayer from './movePlayer';
import transitionPlayer from './transitionPlayer';

describe('playerReducer', function() {
    it('can move player', function() {
        var currentPosition = { x: 0, y: 0 };
        var targetPosition = { x: 1, y: 1 };
        var pitchSize = { height: 10, width: 10 };

        var action = movePlayer(currentPosition, targetPosition, pitchSize);

        var newState = playerReducer({}, action);

        expect(newState.currentPosition).to.deep.equal(currentPosition);
        expect(newState.targetPosition).to.deep.equal(targetPosition);
        expect(newState.path).to.deep.equal([[0, 0], [1, 1]]);
    });

    it('can transition player', function() {
        var targetPosition = { x: 1, y: 1 };
        var transitionPlayerAction = transitionPlayer(targetPosition);

        var state = {
            currentPosition: {x: 0, y: 0},
            targetPosition: {x: 1, y: 1},
            path: [[0, 0], [1, 1]]
        };

        state = playerReducer(state, transitionPlayerAction);
        
        var expectedCurrentPosition = {
            x: 1,
            y: 1
        };

        var expectedPath = [[1, 1]];

        expect(state.currentPosition).to.deep.equal(expectedCurrentPosition);
        expect(state.targetPosition).to.deep.equal(targetPosition);
        expect(state.path).to.deep.equal(expectedPath);
    });

    it('does not transition when player is in target position', function() {
        var targetPosition = { x: 1, y: 1 };
        var transitionPlayerAction = transitionPlayer(targetPosition);

        var state = {
            currentPosition: {x: 1, y: 1},
            targetPosition: {x: 1, y: 1},
            path: [[1, 1]]
        };

        state = playerReducer(state, transitionPlayerAction);

        var expectedCurrentPosition = {
            x: 1,
            y: 1
        };

        var expectedPath = [];

        expect(state.currentPosition).to.deep.equal(expectedCurrentPosition);
        expect(state.targetPosition).to.deep.equal(targetPosition);
        expect(state.path).to.deep.equal(expectedPath);
    });
});