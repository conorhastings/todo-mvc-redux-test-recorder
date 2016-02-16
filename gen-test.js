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

var equality = (result, nextState) => equal(result, nextState);;

test('expected state returned for each action', function(assert) {
  var actions = [
  {
    "action": {
      "type": "COMPLETE_TODO",
      "id": 4
    },
    "nextState": {
      "todos": [
        {
          "id": 4,
          "completed": false,
          "text": "great"
        },
        {
          "id": 3,
          "completed": true,
          "text": "awesome"
        },
        {
          "id": 2,
          "completed": true,
          "text": "dope"
        },
        {
          "id": 1,
          "completed": true,
          "text": "sweet"
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
      "id": 3
    },
    "nextState": {
      "todos": [
        {
          "id": 4,
          "completed": false,
          "text": "great"
        },
        {
          "id": 3,
          "completed": false,
          "text": "awesome"
        },
        {
          "id": 2,
          "completed": true,
          "text": "dope"
        },
        {
          "id": 1,
          "completed": true,
          "text": "sweet"
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
          "text": "great"
        },
        {
          "id": 3,
          "completed": false,
          "text": "awesome"
        },
        {
          "id": 2,
          "completed": false,
          "text": "dope"
        },
        {
          "id": 1,
          "completed": true,
          "text": "sweet"
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
          "id": 4,
          "completed": false,
          "text": "great"
        },
        {
          "id": 3,
          "completed": false,
          "text": "awesome"
        },
        {
          "id": 2,
          "completed": false,
          "text": "dope"
        },
        {
          "id": 1,
          "completed": false,
          "text": "sweet"
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
      "id": 0
    },
    "nextState": {
      "todos": [
        {
          "id": 4,
          "completed": false,
          "text": "great"
        },
        {
          "id": 3,
          "completed": false,
          "text": "awesome"
        },
        {
          "id": 2,
          "completed": false,
          "text": "dope"
        },
        {
          "id": 1,
          "completed": false,
          "text": "sweet"
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
      "id": 4
    },
    "nextState": {
      "todos": [
        {
          "id": 4,
          "completed": true,
          "text": "great"
        },
        {
          "id": 3,
          "completed": false,
          "text": "awesome"
        },
        {
          "id": 2,
          "completed": false,
          "text": "dope"
        },
        {
          "id": 1,
          "completed": false,
          "text": "sweet"
        },
        {
          "text": "Use Redux",
          "completed": false,
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