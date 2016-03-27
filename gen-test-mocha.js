var assert = require('assert');
require('babel-register');
var equal = require('deep-equal');
var reducer = require('./reducers').default;

var equality = (result, nextState) => equal(result, nextState);;

describe('redux reducer test', function() {
  var state;
  var actions;
  before(function() {
    state = {
    "todos": [
        {
            "text": "Use Redux",
            "completed": false,
            "id": 0
        }
    ]
};
    actions = [
  {
    "action": {
      "type": "ADD_TODO",
      "text": "nice"
    },
    "nextState": {
      "todos": [
        {
          "id": 1,
          "completed": false,
          "text": "nice"
        },
        {
          "text": "Use Redux",
          "completed": false,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "ADD_TODO",
      "text": "but i use mocha"
    },
    "nextState": {
      "todos": [
        {
          "id": 2,
          "completed": false,
          "text": "but i use mocha"
        },
        {
          "id": 1,
          "completed": false,
          "text": "nice"
        },
        {
          "text": "Use Redux",
          "completed": false,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "ADD_TODO",
      "text": "now you can generate mocha tests!"
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": false,
          "text": "now you can generate mocha tests!"
        },
        {
          "id": 2,
          "completed": false,
          "text": "but i use mocha"
        },
        {
          "id": 1,
          "completed": false,
          "text": "nice"
        },
        {
          "text": "Use Redux",
          "completed": false,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "COMPLETE_TODO",
      "id": 3
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": true,
          "text": "now you can generate mocha tests!"
        },
        {
          "id": 2,
          "completed": false,
          "text": "but i use mocha"
        },
        {
          "id": 1,
          "completed": false,
          "text": "nice"
        },
        {
          "text": "Use Redux",
          "completed": false,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "COMPLETE_TODO",
      "id": 2
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": true,
          "text": "now you can generate mocha tests!"
        },
        {
          "id": 2,
          "completed": true,
          "text": "but i use mocha"
        },
        {
          "id": 1,
          "completed": false,
          "text": "nice"
        },
        {
          "text": "Use Redux",
          "completed": false,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "COMPLETE_TODO",
      "id": 1
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": true,
          "text": "now you can generate mocha tests!"
        },
        {
          "id": 2,
          "completed": true,
          "text": "but i use mocha"
        },
        {
          "id": 1,
          "completed": true,
          "text": "nice"
        },
        {
          "text": "Use Redux",
          "completed": false,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "COMPLETE_TODO",
      "id": 0
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": true,
          "text": "now you can generate mocha tests!"
        },
        {
          "id": 2,
          "completed": true,
          "text": "but i use mocha"
        },
        {
          "id": 1,
          "completed": true,
          "text": "nice"
        },
        {
          "text": "Use Redux",
          "completed": true,
          "id": 0
        }
      ]
    }
  }
];
  });

  after(function() {
    state = {};
    actions = [];
  });

  it('ADD_TODO (action index 0) should correctly update state', function() {
    var action = actions[0];
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState));
  });

  it('ADD_TODO (action index 1) should correctly update state', function() {
    var action = actions[1];
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState));
  });

  it('ADD_TODO (action index 2) should correctly update state', function() {
    var action = actions[2];
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState));
  });

  it('COMPLETE_TODO (action index 3) should correctly update state', function() {
    var action = actions[3];
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState));
  });

  it('COMPLETE_TODO (action index 4) should correctly update state', function() {
    var action = actions[4];
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState));
  });

  it('COMPLETE_TODO (action index 5) should correctly update state', function() {
    var action = actions[5];
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState));
  });

  it('COMPLETE_TODO (action index 6) should correctly update state', function() {
    var action = actions[6];
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState));
  });

});