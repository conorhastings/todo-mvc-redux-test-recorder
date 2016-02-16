var test = require('tape');
require('babel-register');
var equal = require('deep-equal');
var reducer = require('./reducers').default;

var state = {
    "todos": [
        {
            "text": "Use Redux",
            "completed": false,
            "id": 0
        }
    ]
};

var equality = (result, nextState) => equal(result, nextState);

test('expected state returned for each action', function(assert) {
  var actions = [
  {
    "action": {
      "type": "COMPLETE_TODO",
      "id": 0
    },
    "nextState": {
      "todos": [
        {
          "text": "Use Redux",
          "completed": true,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "ADD_TODO",
      "text": "set up test recorder"
    },
    "nextState": {
      "todos": [
        {
          "id": 1,
          "completed": false,
          "text": "set up test recorder"
        },
        {
          "text": "Use Redux",
          "completed": true,
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
          "id": 1,
          "completed": true,
          "text": "set up test recorder"
        },
        {
          "text": "Use Redux",
          "completed": true,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "ADD_TODO",
      "text": "record a test for what i am doing right now"
    },
    "nextState": {
      "todos": [
        {
          "id": 2,
          "completed": false,
          "text": "record a test for what i am doing right now"
        },
        {
          "id": 1,
          "completed": true,
          "text": "set up test recorder"
        },
        {
          "text": "Use Redux",
          "completed": true,
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
          "id": 2,
          "completed": true,
          "text": "record a test for what i am doing right now"
        },
        {
          "id": 1,
          "completed": true,
          "text": "set up test recorder"
        },
        {
          "text": "Use Redux",
          "completed": true,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "ADD_TODO",
      "text": "sleep"
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": false,
          "text": "sleep"
        },
        {
          "id": 2,
          "completed": true,
          "text": "record a test for what i am doing right now"
        },
        {
          "id": 1,
          "completed": true,
          "text": "set up test recorder"
        },
        {
          "text": "Use Redux",
          "completed": true,
          "id": 0
        }
      ]
    }
  },
  {
    "action": {
      "type": "DELETE_TODO",
      "id": 3
    },
    "nextState": {
      "todos": [
        {
          "id": 2,
          "completed": true,
          "text": "record a test for what i am doing right now"
        },
        {
          "id": 1,
          "completed": true,
          "text": "set up test recorder"
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
  var returnExpectedState = actions.map(function (action) {
    var result = reducer(state, action.action);
    state = result;
    return equality(result, action.nextState);
  });
  assert.ok(returnExpectedState.every(function(expected) { return expected }), 'expected state returned for each action');
  assert.end();
});