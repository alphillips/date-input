import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import './ui-kit.css'
import './date-input.css'

class DateInput extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        error:false,
        day:'',
        month:'',
        year:''
      }
  }

  componentDidMount() {
    if(this.props.value && this.props.value !== ''){
      this.setState((prevState, props) => ({
        day:moment(this.props.value).format('DD'),
        month:moment(this.props.value).format('MM'),
        year:moment(this.props.value).format('YYYY')
      }));
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.clear){
      this.clearFields();
    }

    if(nextProps.value){
      this.setState((prevState, props) => ({
        day:moment(nextProps.value).format('DD'),
        month:moment(nextProps.value).format('MM'),
        year:moment(nextProps.value).format('YYYY')
      }));
    }
  }

  clearFields(){
    this.setState((prevState, props) => ({
      day:'',
      month:'',
      year:'',
      error:false
    }));
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  validate = () => {
    let isValidDay = number => {
      return ((number < 32) && number > 0);
    }
    let isValidMonth = number => {
      return ((number < 13) && (number > 0));
    }
    let isValidYear = number => {
      return (number.trim().length === 4);
    }

    if(this.state.day.trim().length !== 0){
      if(!isValidDay(this.state.day)){
        this.setState({
          error: true
        });
        return;
      }
    }

    if(this.state.month.trim().length !== 0){
      if(!isValidMonth(this.state.month)){
        this.setState({
          error: true
        });
        return;
      }
    }

    if(this.state.year.trim().length !== 0){
      if(!isValidYear(this.state.year)){
        this.setState({
          error: true
        });
        return;
      }
    }

    if(this.state.day.trim().length !== 0 &&
        this.state.month.trim().length !== 0 &&
        this.state.year.trim().length !== 0){
      let date = this.state.year + '-' + this.state.month + '-' + this.state.day;
      date = moment(date, "YYYY-MM-DD");
      if(!date.isValid()){
        this.setState({
          error: true
        });
      } else {
        this.setState({
          error: false
        });
        if(typeof this.props.handle === 'function'){
          this.props.handle(date.format('YYYY-MM-DD'));
        }
      }
    }
  }

  handleBlur = (event) => {
      let value = event.target.value;
      if(value.trim() === ''){
        this.setState({
          error:true
        });
      }

      this.validate();
  }


  render() {
    return (
      <div>
      <fieldset className={'date-fields ' + (this.state.error ? 'hasError':'')}>
        <legend>{this.props.label}</legend>
          <span className="day">
            <label htmlFor={this.props.id + 'date-day'}>Day
              <input
                  className="uikit-text-input uikit-text-input--block"
                  type="tel"
                  id={this.props.id + 'date-day'}
                  name="day"
                  value={this.state.day}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
              />

            </label>
          </span>
          <span className="month">
            <label htmlFor={this.props.id + 'date-month'}>Month
              <input type="tel"
                  id={this.props.id + 'date-month'}
                  name="month"
                  className="uikit-text-input uikit-text-input--block"
                  value={this.state.month}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
              />
            </label>
          </span>
          <span className="year">
            <label htmlFor={this.props.id + 'date-year'}>Year
              <input type="tel"
                  id={this.props.id + 'date-year'}
                  name="year"
                  className="uikit-text-input uikit-text-input--block"
                  value={this.state.year}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
              />
            </label>
          </span>
          {this.state.error &&
          <span role="alert" aria-live="assertive" className="hasError">Date is not valid</span>
          }
      </fieldset>
      </div>
    )
  }
}

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handle: PropTypes.func,
  value: PropTypes.string
};

export default DateInput;
