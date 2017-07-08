import React from 'react'
import ReactDom  from 'react-dom'
import Redux from 'redux'
import Field from './field'

ReactDom.render(
    <Field initialValue="text" />, 
    document.getElementById('app'));