function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

import moment from 'moment';
import ClearImg from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import Help from '@react-ag-components/help';

import './date-input.css';

import DatePicker from 'material-ui/DatePicker';

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.formatDate = function (date) {
      if (date) {
        return moment(date).format('DD MMM YYYY');
      }
      return '';
    };

    _this.onChange = function (ev, date) {
      date = moment(date, "YYYY-MM-DD");
      if (typeof _this.props.handle === 'function') {
        _this.props.handle(date.format('YYYY-MM-DD'));
      }
    };

    _this.handleClear = function () {
      if (typeof _this.props.handle === 'function') {
        _this.props.handle('');
      }
    };

    _this.excuseKeyboard = function (event) {
      event.target.focus();
    };

    _this.handleFocus = function (event) {
      _this.refs.datePicker.openDialog();
    };

    _this.state = {
      error: false
    };
    return _this;
  }

  DateInput.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.value && this.props.value !== '') {
      this.setState(function (prevState, props) {
        return {
          value: new Date(_this2.props.value)
        };
      });
    }
  };

  DateInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {

    if (nextProps.value) {
      this.setState(function (prevState, props) {
        return {
          value: new Date(nextProps.value)
        };
      });
    }

    if (nextProps.value === '') {
      this.setState(function (prevState, props) {
        return {
          value: ''
        };
      });
    }
  };

  DateInput.prototype.render = function render() {

    var style = {
      'color': '#999',
      display: 'inline-block'
    };

    var inputContainerStyle = {};
    var helpContainerStyle = {
      display: 'none'
    };
    var className = '';

    if (this.props.helpText) {
      className = 'input-with-help';
      inputContainerStyle = {
        width: '90%'
      };

      helpContainerStyle = {
        marginTop: '40px'
      };
    }

    return React.createElement(
      'div',
      { className: 'date-input-picker' },
      React.createElement(DatePicker, {
        ref: 'datePicker',
        defaultDate: this.state.value,
        floatingLabelText: this.props.label,
        floatingLabelStyle: style,
        hintText: this.props.label,
        style: style,
        textFieldStyle: style,
        formatDate: this.formatDate,
        hintStyle: style,
        onChange: this.onChange,
        value: this.state.value,
        onFocus: this.handleFocus,
        autoOk: true
      }),
      React.createElement(
        IconButton,
        {
          style: { display: 'inline-block' },
          onClick: this.handleClear
        },
        React.createElement(ClearImg, { color: '#999' })
      ),
      this.props.helpText && React.createElement(Help, {
        text: this.props.helpText,
        style: helpContainerStyle
      })
    );
  };

  return DateInput;
}(React.Component);

export default DateInput;