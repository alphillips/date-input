import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Demo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value:''
    }
  }
  
  handle = (date) => {
    console.log(date)
    this.setState((prevState, props) => ({
      value: date
    }))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>date-input Demo</h1>
          <Component id="dob" label="Date of birth" handle={this.handle} value={this.state.value}/>
          <a href="#">Next</a>
        </div>
      </MuiThemeProvider>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
