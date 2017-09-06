import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

let Demo = React.createClass({

  handle(date) {
    console.log(date)
  },

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>date-input Demo</h1>
          <Component id="dob" label="Date of birth" handle={this.handle}/>
        </div>
      </MuiThemeProvider>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))
