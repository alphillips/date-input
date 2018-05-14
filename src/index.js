import React from 'react'
// import PropTypes from 'prop-types'

import moment from 'moment'
// import './ui-kit.css'
import './date-input.css'

// import DatePicker from 'material-ui/DatePicker'
import { DatePicker } from 'material-ui-pickers';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
// import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
// import LuxonUtils from 'material-ui-picker/luxon-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

class DateInput extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        error:false,
        value:new Date()
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

  excuseKeyboard = (event) => {
        event.target.focus();
  }

  handleFocus = (event) => {
    console.log(event)
    this.refs.datePicker.openDialog()
  }


  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {

    const style = {
      'width': '100%',
      'color':'#999'
    }

    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="date-input-picker">

        {/*
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
        */}


        <div className="picker">
          <DatePicker
            label="Clearable"
            clearable
            disableFuture
            maxDateMessage="Date must be less than today"
            value={this.state.value}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
          />
        </div>

        </div>
      </MuiPickersUtilsProvider>
    )
  }
}

export default DateInput;
