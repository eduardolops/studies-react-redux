import React from 'react'
import ReactDom  from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastName="Lopes">
        <Member name="Eduardo" />
        <Member name="Evandro" />
        <Member name="Everton" />
    </Family>
, document.getElementById('app'));