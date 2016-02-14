require("babel-register");
var test = require('tape');
var equal = require('deep-equal');
var reducer = require('./reducers/index.js').default;


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
      "type": "ADD_TODO",
      "text": "noice"
    },
    "nextState": {
      "todos": [
        {
          "id": 1,
          "completed": false,
          "text": "noice"
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
      "text": "wow"
    },
    "nextState": {
      "todos": [
        {
          "id": 2,
          "completed": false,
          "text": "wow"
        },
        {
          "id": 1,
          "completed": false,
          "text": "noice"
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
      "text": "cool"
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": false,
          "text": "cool"
        },
        {
          "id": 2,
          "completed": false,
          "text": "wow"
        },
        {
          "id": 1,
          "completed": false,
          "text": "noice"
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
      "text": "sweet"
    },
    "nextState": {
      "todos": [
        {
          "id": 4,
          "completed": false,
          "text": "sweet"
        },
        {
          "id": 3,
          "completed": false,
          "text": "cool"
        },
        {
          "id": 2,
          "completed": false,
          "text": "wow"
        },
        {
          "id": 1,
          "completed": false,
          "text": "noice"
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
          "id": 4,
          "completed": false,
          "text": "sweet"
        },
        {
          "id": 3,
          "completed": true,
          "text": "cool"
        },
        {
          "id": 2,
          "completed": false,
          "text": "wow"
        },
        {
          "id": 1,
          "completed": false,
          "text": "noice"
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
          "id": 4,
          "completed": false,
          "text": "sweet"
        },
        {
          "id": 3,
          "completed": true,
          "text": "cool"
        },
        {
          "id": 2,
          "completed": false,
          "text": "wow"
        },
        {
          "id": 1,
          "completed": false,
          "text": "noice"
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
      "id": 1
    },
    "nextState": {
      "todos": [
        {
          "id": 4,
          "completed": false,
          "text": "sweet"
        },
        {
          "id": 3,
          "completed": true,
          "text": "cool"
        },
        {
          "id": 2,
          "completed": false,
          "text": "wow"
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
          "id": 4,
          "completed": false,
          "text": "sweet"
        },
        {
          "id": 3,
          "completed": true,
          "text": "cool"
        },
        {
          "id": 2,
          "completed": true,
          "text": "wow"
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