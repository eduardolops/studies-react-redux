import React from 'react'
import ReactDom  from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './counter'
import counterReducer from './counterReducer'

const reducers = combineReducers({
    counter: counterReducer
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>,
    document.getElementById('app'));