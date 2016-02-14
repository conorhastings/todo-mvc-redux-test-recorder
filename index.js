import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore, { recordProps } from './store/configureStore'
import { TestRecorder } from 'redux-test-recorder'
import 'todomvc-app-css/index.css'

const store = configureStore()

render(
  <Provider store={store}>
  	<div>
  		<div className="todoapp"> 
	    	<App />
	    </div>
	    <TestRecorder {...recordProps} />
	</div>
  </Provider>,
  document.getElementById('root')
)
