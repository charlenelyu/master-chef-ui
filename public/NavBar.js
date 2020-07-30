"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Sider = _antd.Layout.Sider;

var SideBar = function SideBar(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.Layout, {
    className: "cover"
  }, /*#__PURE__*/_react.default.createElement(Sider, {
    id: "sider-menu",
    breakpoint: "lg",
    collapsedWidth: "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/_react.default.createElement(_antd.Menu, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['home']
  }, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
    key: "home"
  }, /*#__PURE__*/_react.default.createElement(_antd.Icon, {
    type: "user"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "nav-ingredients"
  }, "Home")))), /*#__PURE__*/_react.default.createElement(_antd.Layout, null, /*#__PURE__*/_react.default.createElement(Header, {
    style: {
      background: '#fff',
      padding: 0
    }
  }), /*#__PURE__*/_react.default.createElement(Content, {
    style: {
      margin: '24px 16px 0'
    }
  }, props.children)));
};

var _default = NavBar;
exports.default = _default;