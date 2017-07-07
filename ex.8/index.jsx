import React from 'react'
import ReactDom  from 'react-dom'
import Count from './Count'

ReactDom.render(<Count label="Contar: " initialValue={10} />, document.getElementById('app'));