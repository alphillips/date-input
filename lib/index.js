'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _clear = require('material-ui/svg-icons/content/clear');

var _clear2 = _interopRequireDefault(_clear);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _help = require('@react-ag-components/help');

var _help2 = _interopRequireDefault(_help);

require('./date-input.css');

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.formatDate = function (date) {
      if (date) {
        return (0, _moment2.default)(date).format('DD MMM YYYY');
      }
      return '';
    };

    _this.onChange = function (ev, date) {
      date = (0, _moment2.default)(date, "YYYY-MM-DD");
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

    return _react2.default.createElement(
      'div',
      { className: 'date-input-picker' },
      _react2.default.createElement(_DatePicker2.default, {
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
      _react2.default.createElement(
        _IconButton2.default,
        {
          style: { display: 'inline-block' },
          onClick: this.handleClear
        },
        _react2.default.createElement(_clear2.default, { color: '#999' })
      ),
      this.props.helpText && _react2.default.createElement(_help2.default, {
        text: this.props.helpText,
        style: helpContainerStyle
      })
    );
  };

  return DateInput;
}(_react2.default.Component);

exports.default = DateInput;
module.exports = exports['default'];