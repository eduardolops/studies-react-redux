import React from 'react'
import ReactDom  from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

ReactDom.render(
    <Field initialValue="text" />, 
    document.getElementById('app'));