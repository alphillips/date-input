import React from 'react'

import moment from 'moment'
import ClearImg from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';

import './date-input.css'

import DatePicker from 'material-ui/DatePicker'

class DateInput extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        error:false
      }
  }

  componentDidMount() {
    if(this.props.value && this.props.value !== ''){
      this.setState((prevState, props) => ({
        value:new Date(this.props.value)
      }))
    }
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.value){
      this.setState((prevState, props) => ({
        value:new Date(nextProps.value)
      }))
    }

    if(nextProps.value === ''){
      this.setState((prevState, props) => ({
        value:''
      }))
    }
  }

  formatDate = (date) => {
    if(date) {
      return moment(date).format('DD MMM YYYY')
    }
    return ''
  }

  onChange = (ev, date) => {
    date = moment(date, "YYYY-MM-DD")
    if(typeof this.props.handle === 'function'){
      this.props.handle(date.format('YYYY-MM-DD'));
    }
  }

  handleClear = () => {
    if(typeof this.props.handle === 'function'){
      this.props.handle('');
    }
  }

  excuseKeyboard = (event) => {
        event.target.focus();
  }

  handleFocus = (event) => {
    this.refs.datePicker.openDialog()
  }



  render() {

    const style = {
      'color':'#999',
      display:'inline-block'
    }

    return (
      <div className="date-input-picker">

        <DatePicker
          ref='datePicker'
          defaultDate={this.state.value}
          floatingLabelText={this.props.label}
          floatingLabelStyle={style}
          hintText={this.props.label}
          style={style}
          textFieldStyle={style}
          formatDate={this.formatDate}
          hintStyle={style}
          onChange={this.onChange}
          value={this.state.value}
          onFocus={this.handleFocus}
          autoOk={true}
        />

        <IconButton
          tooltip="Clear date"
          style={{display:'inline-block'}}
          onClick={this.handleClear}
        >
          <ClearImg color="#999"/>
        </IconButton>

      </div>
    )
  }
}

export default DateInput;
