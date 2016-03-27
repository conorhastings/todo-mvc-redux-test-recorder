var test = require('ava');
 require('babel-register');
var equal = require('deep-equal');
var reducer = require('./reducers').default;

 /* import reducer from YOUR_REDUCER_LOCATION_HERE */
 var equality = (result, nextState) => equal(result, nextState);;

 test('expected state returned for each action', function(t) {
   var state = {
    "todos": [
        {
            "text": "Use Redux",
            "completed": false,
            "id": 0
        }
    ]
};
   var actions = [
  {
    "action": {
      "type": "ADD_TODO",
      "text": "use redux test recorder"
    },
    "nextState": {
      "todos": [
        {
          "id": 1,
          "completed": false,
          "text": "use redux test recorder"
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
      "text": "use redux test recorder with ava!"
    },
    "nextState": {
      "todos": [
        {
          "id": 2,
          "completed": false,
          "text": "use redux test recorder with ava!"
        },
        {
          "id": 1,
          "completed": false,
          "text": "use redux test recorder"
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
          "id": 2,
          "completed": true,
          "text": "use redux test recorder with ava!"
        },
        {
          "id": 1,
          "completed": false,
          "text": "use redux test recorder"
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
          "id": 2,
          "completed": true,
          "text": "use redux test recorder with ava!"
        },
        {
          "id": 1,
          "completed": true,
          "text": "use redux test recorder"
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
          "id": 2,
          "completed": true,
          "text": "use redux test recorder with ava!"
        },
        {
          "id": 1,
          "completed": true,
          "text": "use redux test recorder"
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
     t.ok(equality(result, action.nextState), action.action.type + '(action index ' + index +') correctly updated state');
   });
 });