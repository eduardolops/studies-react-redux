import React from 'react'
import ReactDom  from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
import FieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: FieldReducer
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="text" />
    </Provider>,
    document.getElementById('app'));