import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({

  handle(date) {
    console.log(date)
  },

  render() {
    return <div>
      <h1>date-input Demo</h1>
      <Component id="dob" label="Date of birth" handle={this.handle}/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
