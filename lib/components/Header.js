"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _logo = require("../images/logo.png");

var _logo2 = _interopRequireDefault(_logo);

var _header = require("../styles/header");

require("font-awesome/css/font-awesome.min.css");

var _reactFontawesome = require("react-fontawesome");

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe
var Home = "http://dictybase.org";


/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
var Header = function Header(_ref) {
  var downloads = _ref.downloads,
      info = _ref.info,
      cite = _ref.cite,
      _ref$home = _ref.home,
      home = _ref$home === undefined ? Home : _ref$home;

  return _react2.default.createElement(
    _header.Container,
    null,
    _react2.default.createElement(
      _header.Logo,
      null,
      _react2.default.createElement(
        _header.Link,
        { href: home },
        _react2.default.createElement(_header.Img, { src: _logo2.default })
      )
    ),
    _react2.default.createElement(
      _header.Right,
      null,
      _react2.default.createElement(
        _header.LinksContainer,
        null,
        _react2.default.createElement(
          _header.Link,
          { href: cite },
          _react2.default.createElement(_reactFontawesome2.default, { name: "plus" }),
          " Cite Us"
        ),
        _react2.default.createElement(
          _header.Link,
          { href: downloads },
          _react2.default.createElement(_reactFontawesome2.default, { name: "download" }),
          " Downloads"
        ),
        _react2.default.createElement(
          _header.Link,
          { href: info },
          _react2.default.createElement(_reactFontawesome2.default, { name: "info-circle" }),
          " About dictyBase"
        )
      ),
      _react2.default.createElement(
        _header.SearchContainer,
        null,
        _react2.default.createElement(_header.SearchBar, { placeholder: "Guided Search (coming soon)", disabled: true }),
        _react2.default.createElement(
          _header.Magnifier,
          null,
          _react2.default.createElement(_reactFontawesome2.default, { name: "search" })
        )
      )
    )
  );
};

exports.default = Header;
module.exports = exports["default"];