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
      "type": "ADD_TODO",
      "text": "no really use redux"
    },
    "nextState": {
      "todos": [
        {
          "id": 1,
          "completed": false,
          "text": "no really use redux"
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
      "text": "seriously use redux"
    },
    "nextState": {
      "todos": [
        {
          "id": 2,
          "completed": false,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": false,
          "text": "no really use redux"
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
      "text": "then add redux test recorder"
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": false,
          "text": "then add redux test recorder"
        },
        {
          "id": 2,
          "completed": false,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": false,
          "text": "no really use redux"
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
      "text": "then sleep well"
    },
    "nextState": {
      "todos": [
        {
          "id": 4,
          "completed": false,
          "text": "then sleep well"
        },
        {
          "id": 3,
          "completed": false,
          "text": "then add redux test recorder"
        },
        {
          "id": 2,
          "completed": false,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": false,
          "text": "no really use redux"
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
          "text": "then sleep well"
        },
        {
          "id": 3,
          "completed": false,
          "text": "then add redux test recorder"
        },
        {
          "id": 2,
          "completed": false,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": false,
          "text": "no really use redux"
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
          "text": "then sleep well"
        },
        {
          "id": 3,
          "completed": false,
          "text": "then add redux test recorder"
        },
        {
          "id": 2,
          "completed": false,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": true,
          "text": "no really use redux"
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
          "text": "then sleep well"
        },
        {
          "id": 3,
          "completed": false,
          "text": "then add redux test recorder"
        },
        {
          "id": 2,
          "completed": true,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": true,
          "text": "no really use redux"
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
          "text": "then sleep well"
        },
        {
          "id": 3,
          "completed": true,
          "text": "then add redux test recorder"
        },
        {
          "id": 2,
          "completed": true,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": true,
          "text": "no really use redux"
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
      "id": 4
    },
    "nextState": {
      "todos": [
        {
          "id": 3,
          "completed": true,
          "text": "then add redux test recorder"
        },
        {
          "id": 2,
          "completed": true,
          "text": "seriously use redux"
        },
        {
          "id": 1,
          "completed": true,
          "text": "no really use redux"
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
  actions.forEach(function(action, index) {
    var result = reducer(state, action.action);
    state = result;
    assert.ok(equality(result, action.nextState), action.action.type + '(action index ' + index +') correctly updated state');
  });
  assert.end();
});