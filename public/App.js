"use strict";

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridList = _interopRequireDefault(require("@material-ui/core/GridList"));

var _GridListTile = _interopRequireDefault(require("@material-ui/core/GridListTile"));

var _GridListTileBar = _interopRequireDefault(require("@material-ui/core/GridListTileBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    }
  };
});

var img1 = require('/sampleImg/sp1.jpg');

var img2 = require('/sampleImg/sp1.jpg');

var testRecipe = [{
  id: 1,
  title: "Test1",
  author: "li",
  image: img1,
  createdAt: new Date('2020-07-29'),
  ingredients: "a",
  steps: "111111",
  tag: "aaaaaa"
}, {
  id: 2,
  title: "Test2",
  author: "ti",
  image: img2,
  createdAt: new Date('2020-07-30'),
  ingredients: "a",
  steps: "111111",
  tag: "aaaaaa"
}];

var RecipeFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(RecipeFilter, _React$Component);

  var _super = _createSuper(RecipeFilter);

  function RecipeFilter() {
    _classCallCheck(this, RecipeFilter);

    return _super.apply(this, arguments);
  }

  _createClass(RecipeFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "This is a place holder for recipe filter");
    }
  }]);

  return RecipeFilter;
}(_react.default.Component);

var RecipeCard = /*#__PURE__*/function (_React$Component2) {
  _inherits(RecipeCard, _React$Component2);

  var _super2 = _createSuper(RecipeCard);

  function RecipeCard() {
    _classCallCheck(this, RecipeCard);

    return _super2.apply(this, arguments);
  }

  _createClass(RecipeCard, [{
    key: "render",
    value: function render() {
      var recipe = this.props.recipe;
      return /*#__PURE__*/_react.default.createElement(_GridListTile.default, {
        key: recipe.image
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: recipe.image,
        alt: recipe.title
      }), /*#__PURE__*/_react.default.createElement(_GridListTileBar.default, {
        title: recipe.title,
        subtitle: /*#__PURE__*/_react.default.createElement("span", null, "by: ", recipe.author)
      }));
    }
  }]);

  return RecipeCard;
}(_react.default.Component);

var RecipeTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(RecipeTable, _React$Component3);

  var _super3 = _createSuper(RecipeTable);

  function RecipeTable() {
    var _this;

    _classCallCheck(this, RecipeTable);

    _this = _super3.call(this);
    _this.state = {
      recipes: testRecipe
    };
    return _this;
  }

  _createClass(RecipeTable, [{
    key: "render",
    value: function render() {
      var classes = useStyles();
      var recipeCard = this.state.recipes.map(function (recipe) {
        return /*#__PURE__*/_react.default.createElement(RecipeCard, {
          key: recipe.id,
          recipe: recipe
        });
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react.default.createElement(_GridList.default, {
        cellHeight: 180,
        className: classes.gridList
      }, /*#__PURE__*/_react.default.createElement(_GridListTile.default, {
        key: "Subheader",
        cols: 3,
        style: {
          height: 'auto'
        }
      }), recipeCard));
    }
  }]);

  return RecipeTable;
}(_react.default.Component);

var RecipeAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(RecipeAdd, _React$Component4);

  var _super4 = _createSuper(RecipeAdd);

  function RecipeAdd() {
    _classCallCheck(this, RecipeAdd);

    return _super4.apply(this, arguments);
  }

  _createClass(RecipeAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "This is a place holder for adding recipe");
    }
  }]);

  return RecipeAdd;
}(_react.default.Component);

var RecipeList = /*#__PURE__*/function (_React$Component5) {
  _inherits(RecipeList, _React$Component5);

  var _super5 = _createSuper(RecipeList);

  function RecipeList() {
    _classCallCheck(this, RecipeList);

    return _super5.apply(this, arguments);
  }

  _createClass(RecipeList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "Master Chef"), /*#__PURE__*/_react.default.createElement(RecipeFilter, null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(RecipeTable, null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(RecipeAdd, null));
    }
  }]);

  return RecipeList;
}(_react.default.Component);

var element = /*#__PURE__*/_react.default.createElement(RecipeList, null);

ReactDOM.render(element, document.getElementById("contents"));