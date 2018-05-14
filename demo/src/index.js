import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class Demo extends React.Component {

  constructor(props) {
      super(props)

      this.state = {
        value:''
      }
  }

  onChange = (val) => {
    this.setState((prevState, props) => ({
      value: val
    }))
  }

  render() {
    return (
      <div>
        <h1>date-input Demo</h1>
        <Component id="dob" label="Date of birth" handle={this.handle}/>
      </div>
    )
  }

}

render(<Demo/>, document.querySelector('#demo'))
