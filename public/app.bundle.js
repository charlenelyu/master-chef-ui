!function(A){function e(e){for(var n,o,c=e[0],i=e[1],l=e[2],f=0,s=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(A[n]=i[n]);for(u&&u(e);s.length;)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var A,e=0;e<a.length;e++){for(var t=a[e],n=!0,c=1;c<t.length;c++){var i=t[c];0!==r[i]&&(n=!1)}n&&(a.splice(e--,1),A=o(o.s=t[0]))}return A}var n={},r={0:0},a=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=A,o.c=n,o.d=function(A,e,t){o.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},o.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},o.t=function(A,e){if(1&e&&(A=o(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var n in A)o.d(t,n,function(e){return A[e]}.bind(null,n));return t},o.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return o.d(e,"a",e),e},o.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;a.push([282,1]),t()}({189:function(A,e,t){var n=t(489),r=t(490);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[A.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);A.exports=r.locals||{}},282:function(A,e,t){A.exports=t(617)},490:function(A,e,t){"use strict";t.r(e);var n=t(149),r=t.n(n),a=t(257),o=r()(!1);o.i(a.a),o.push([A.i,'.card-list {\n  margin-bottom: 13px;\n}\n.card-list img {\n  height: 156px;\n}\n.card-list .ant-card {\n  box-shadow: 0px 1px 7px 0 rgba(0, 0, 0, 0.1);\n}\n.card-list .ant-card:hover {\n  transform: scale(1.1, 1.1);\n  cursor: pointer;\n}\n.card-list .ant-card-cover img {\n  width: 100%;\n}\n.site-layout-content {\n  background: #fff;\n  padding: 24px;\n  height: auto;\n}\n.logo {\n  width: 120px;\n  height: 31px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px 24px 16px 0;\n  float: left;\n}\n[data-theme="dark"] .site-layout-content {\n  background: #141414;\n}\n[data-theme="dark"] .logo {\n  background: rgba(255, 255, 255, 0.3);\n}\n.search-bar {\n  padding-top: 15px;\n  width: \'70%\';\n}\n.brand {\n  color: white;\n  font-size: 30px;\n}\n',""]),e.default=o},617:function(A,e,t){"use strict";t.r(e);t(283);var n=t(0),r=t.n(n),a=t(15),o=t.n(a),c=t(628),i=t(621),l=(t(189),t(630)),u=t(627),f=t(115),s=t(65),p=t(625),m=u.a.Search;function d(){return r.a.createElement(f.a,null,r.a.createElement(s.a,{span:3},r.a.createElement("div",{className:"brand"},"MasterChef")),r.a.createElement(s.a,{span:6},r.a.createElement(p.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},r.a.createElement(p.a.Item,{key:"1"},r.a.createElement(l.a,{to:"/"},"Home")),r.a.createElement(p.a.Item,{key:"2",disabled:!0},r.a.createElement(l.a,{to:"/profile"},"Profile")))),r.a.createElement(s.a,{className:"search-bar",span:6},r.a.createElement(m,{placeholder:"input search text",onSearch:function(A){return console.log(A)}})))}var y=t(629),b=t(280);function g(A){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function h(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function v(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}function x(A,e){return(x=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}function w(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,n=O(A);if(e){var r=O(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return E(this,t)}}function E(A,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(A):e}function O(A){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}var P=function(A){!function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&x(A,e)}(o,A);var e,t,n,a=w(o);function o(){return h(this,o),a.apply(this,arguments)}return e=o,(t=[{key:"render",value:function(){return r.a.createElement("div",null,"This is a place holder for recipe filter")}}])&&v(e.prototype,t),n&&v(e,n),o}(r.a.Component),D=t(623),T=D.a.Meta;function q(A){var e=A.recipe,t=e.title,n=e.author,a=e.img;return r.a.createElement(s.a,{className:"card-list",span:6},r.a.createElement(D.a,{hoverable:!0,style:{width:250,marginLeft:16},size:"small",cover:r.a.createElement("img",{alt:t,src:a})},r.a.createElement(T,{title:t,description:r.a.createElement("span",null,"by: ",n)})))}function V(A){var e=A.recipes.map((function(A,e){return r.a.createElement(q,{key:e,recipe:A})}));return r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(f.a,{gutter:16},e))}var k=t(622),B=t(624),j=t(626),H=t(620),M=t(86),S=t(631),z=t(632);function R(A){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function U(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}function Q(A,e){return(Q=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}function Z(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,n=C(A);if(e){var r=C(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return X(this,t)}}function X(A,e){return!e||"object"!==R(e)&&"function"!=typeof e?F(A):e}function F(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function C(A){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function K(){return(K=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A}).apply(this,arguments)}function Y(A,e){return function(A){if(Array.isArray(A))return A}(A)||function(A,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(A)))return;var t=[],n=!0,r=!1,a=void 0;try{for(var o,c=A[Symbol.iterator]();!(n=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(A){r=!0,a=A}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return t}(A,e)||function(A,e){if(!A)return;if("string"==typeof A)return I(A,e);var t=Object.prototype.toString.call(A).slice(8,-1);"Object"===t&&A.constructor&&(t=A.constructor.name);if("Map"===t||"Set"===t)return Array.from(A);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(A,e)}(A,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(A,e){(null==e||e>A.length)&&(e=A.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=A[t];return n}function N(A){var e=A.visible,t=A.onSubmit,n=A.onCancel,a=Y(k.a.useForm(),1)[0];return r.a.createElement(B.a,{visible:e,title:"Add a New Recipe",okText:"Submit",cancelText:"cancel",onOk:function(){a.validateFields().then((function(A){a.resetFields(),t(A)})).catch((function(A){console.log("Validate Failed:",A)}))},onCancel:n},r.a.createElement(k.a,{form:a,labelCol:{span:4},wrapperCol:{span:20},layout:"horizontal",name:"addRecipe"},r.a.createElement(k.a.Item,{name:"title",label:"Title"},r.a.createElement(u.a,null)),r.a.createElement(k.a.Item,{name:"author",label:"Author"},r.a.createElement(u.a,null)),r.a.createElement(k.a.Item,{name:"tag",label:"Tag"},r.a.createElement(j.a,null,r.a.createElement(j.a.Option,{value:"demo1"},"Demo1"),r.a.createElement(j.a.Option,{value:"demo2"},"Demo2"))),r.a.createElement(k.a.Item,{name:"ingredients",label:"Ingredients"},r.a.createElement(u.a.TextArea,null)),r.a.createElement(k.a.Item,{label:"Steps"},r.a.createElement(k.a.List,{name:"steps"},(function(A,e){var t=e.add,n=e.remove;return r.a.createElement("div",null,A.map((function(A){return r.a.createElement(H.a,{style:{display:"flex",marginBottom:8},align:"start"},r.a.createElement(k.a.Item,K({},A,{rules:[{required:!0,message:"Please input step or delete this field."}]}),r.a.createElement(u.a,null)),r.a.createElement(S.a,{onClick:function(){n(A.name)}}))})),r.a.createElement(k.a.Item,null,r.a.createElement(M.a,{type:"dashed",onClick:function(){t()},block:!0},r.a.createElement(z.a,null)," Add field")))})))))}var J=function(A){!function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&Q(A,e)}(o,A);var e,t,n,a=Z(o);function o(A){var e;return function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a.call(this,A)).state={visible:!1},e.onSubmit=e.onSubmit.bind(F(e)),e.onCancel=e.onCancel.bind(F(e)),e}return e=o,(t=[{key:"onSubmit",value:function(A){var e=A.title,t={author:A.author,title:e,tag:A.tag,ingredients:A.ingredients,steps:A.steps};console.log(t),this.props.createRecipe(t),this.setState({visible:!1})}},{key:"onCancel",value:function(){console.log("Clicked cancel button"),this.setState({visible:!1})}},{key:"render",value:function(){var A=this;return r.a.createElement("div",null,r.a.createElement(M.a,{type:"primary",shape:"circle",icon:r.a.createElement(z.a,null),size:"large",onClick:function(){A.setState({visible:!0})}}),r.a.createElement(N,{visible:this.state.visible,onSubmit:this.onSubmit,onCancel:this.onCancel}))}}])&&U(e.prototype,t),n&&U(e,n),o}(r.a.Component),G=t.p+"384e1286d2666a23982500db6384636e.jpg",W=t.p+"6bbfea826b2d936a944fd78a0b87a971.jpg";function L(A){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function _(A){return function(A){if(Array.isArray(A))return $(A)}(A)||function(A){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(A))return Array.from(A)}(A)||function(A,e){if(!A)return;if("string"==typeof A)return $(A,e);var t=Object.prototype.toString.call(A).slice(8,-1);"Object"===t&&A.constructor&&(t=A.constructor.name);if("Map"===t||"Set"===t)return Array.from(A);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(A,e)}(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(A,e){(null==e||e>A.length)&&(e=A.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=A[t];return n}function AA(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}function eA(A,e){return(eA=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}function tA(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,n=aA(A);if(e){var r=aA(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return nA(this,t)}}function nA(A,e){return!e||"object"!==L(e)&&"function"!=typeof e?rA(A):e}function rA(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function aA(A){return(aA=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}var oA=[{id:1,title:"Test1",author:"li",img:G,created:new Date("2020/07/29"),ingredients:["a","b"],steps:["111111","222222"],tag:"aaaaaa"},{id:2,title:"Test2",author:"ti",img:W,created:new Date("2020/07/30"),ingredients:["a","b"],steps:["111111","222222"],tag:"aaaaaa"}],cA=function(A){!function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&eA(A,e)}(o,A);var e,t,n,a=tA(o);function o(A){var e;return function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a.call(this,A)).state={recipes:[]},e.createRecipe=e.createRecipe.bind(rA(e)),e}return e=o,(t=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var A=this;setTimeout((function(){A.setState({recipes:oA})}),500)}},{key:"createRecipe",value:function(A){A.id=this.state.recipes.length+1,A.created=(new Date).toLocaleDateString(),A.img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgB9AH0AwERAAIRAQMRAf/EAHAAAQEBAQEBAQAAAAAAAAAAAAAFBAMCAQgBAQAAAAAAAAAAAAAAAAAAAAAQAQABAgEHCgYDAQEAAAAAAAABAgMEodFSUzQFFREhMUFxgZGxchRRweESshNhIjJCIxEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/SIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPF6/bs0/dXPJ8I65Bgu70uTzW6Ypj4zzyDj7/F6zJGYD3+L1mSnMB7/F6zJTmA9/i9ZkpzAe/wAXrMlOYD3+L1mSnMB7/F6zJTmA9/i9ZkpzAe/xesyU5gPf4vWZKcwHv8XrMlOYD3+L1mSnMB7/ABesyU5gPf4vWZKcwHv8XrMlOYD3+L1mSnMB7/F6zJTmA9/i9ZkpzAe/xesyU5gPf4vWZKcwHv8AF6zJTmA9/i9ZkpzAe/xesyU5gPf4vWZKcwHv8XrMlOYD3+L1mSnMB7/F6zJTmA9/i9ZkpzA+xvDFRPPVE/xMR8garG86Kp5LsfbOlHQDbExMcsc8T0SAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxfvU2rc11dXRHxkEW7dru1zXXPLM5AeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbMBi5t1xbrn/zq6P4kFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3el2ZuU246KY5Z7ZBhB1sWK71f20d89UQDdG6rXJz11TP8ckAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQDhVnTqyAcKs6dWQHO9uuYp5bVX3TH/MgwzHJzT0g+AtYS7NzD0VT09E9scwOwAAAAAAAAAAAAAAAAAAAAAAAAAAAI+8Nrr7vKAZwVN10xFiqrrmrn7oBsAAAAAAAAAAAAAAAAAAAAAAAAAAAABHx9MU4qvk6+SfGAZwVd17PV658oBrAAAAAAAAAAAAAAAAAAAAAAAAAAABHx+13O78YBnBV3Zs0+qfkDWAAAAAAAAAAAAAAAAAAAAAAAAAAAACRvHaquyPIGYFTdez1eufKAbAAAAAAAAAAAAAAAAAAAAAAAAAAAAR8ftdzu/GAZwVd2bNPqn5A1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAkbx2qrsjyBmBU3Xs9XrnygGwAAAAAAAAAAAAAAAAAAAAAAAAAAAEfH7Xc7vxgGcFXdmzT6p+QNYAAAAAAAAAAAAAAAAAAAAAAAAAAAAJG8dqq7I8gZgVN17PV658oBsAAAAAAAAAAAAAAAAAAAAAAAAAAABHx+13O78YBnBV3Zs0+qfkDWAAAAAAAAD5VVTTTNVU8kRHLMgm170vffy0UxFPVEg3YbEU37f3RzTHNVHwkHUAAAAAAAAAAAAAAAAEjeO1VdkeQMwKm69nq9c+UA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAj4/a7nd+MAzgq7s2afVPyBrAAAAAAAABg3nf5IizTPPPPV2dUAnA74TETZuxP8AxPNVH8AsxMTHLHPE9AAAAAAAAAAAAAAAAAJG8dqq7I8gZgVN17PV658oBsAAAAAAAAAAAAAAAAAAAAAAAAAAABHx+13O78YBnBV3Zs0+qfkDWAAAAAAADzcuU26Kq6uimOUEO5cquV1V1dNU8oPIAKW7cT91P6ap56f8dnwBuAAAAAAAAAAAAAAABI3jtVXZHkDMCpuvZ6vXPlANgAAAAAAAAAAAAAAAAAAAAAAAAAAAI+P2u53fjAM4Ku7Nmn1T8gawAAAAAAATt53+WYs0zzRz19vUDAAAD1RXVRVFVM8lUTywC1YvU3rUVx19MfCQdAAAAAAAAAAAAAAASN47VV2R5AzAqbr2er1z5QDYAAAAAAAAAAAAAAAAAAAAAAAAAAACPj9rud34wDOCruzZp9U/IGsAAAAAAHi9dptWqq56uiP5BEqqqqqmqqeWZnlmQeQAAAasDif1Xftqn+lfNP8AE/EFYAAAAAAAAAAAAAAEjeO1VdkeQMwKm69nq9c+UA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAj4/a7nd+MAzgq7s2afVPyBrAAAAAABM3lf+65Fqmf60f67QYgAAAAAVd34n9lv9dU/wB6MsA1gAAAAAAAAAAAAAkbx2qrsjyBmBU3Xs9XrnygGwAAAAAAAAAAAAAAAAAAAAAAAAAAAEfH7Xc7vxgGcFXdmzT6p+QNYAAAAAOeJvRZs1V9fRTH8giTMzMzPPM88yD4AAAAAD3Zu1WrkV09MdXxBbt3KblEV09FQPQAAPF67TatzXV1dEfGQSLmLxFdf3TXMfCInkiAUMBipvUzRXP96ev4wDUAAAAAACRvHaquyPIGYFTdez1eufKAbAAAAAAAAAAAAAAAAAAAAAAAAAAAAR8ftdzu/GAZwVd2bNPqn5A1gAAAAAlbxv8A7Lv2R/mjm7+sGQAAAAAAAG3d2J+yv9VU/wBa/wDP8T9QUwAAScdif3XPtpn/AM6Oj+Z+IMoPdm7VauU109MdX8AuUV010RXTzxVHLAPoAAAAAJG8dqq7I8gZgVN17PV658oBsAAAAAAAAAAAAAAAAAAAAAAAAAAABHx+13O78YBnBV3Zs0+qfkDWAAAADji7/wCmzNUf6nmp7QRQAAAAAAAAAWsHdqu2Kaqo5+iZ+PJ1g7Ax7wxP66P10z/evp/iASwAAb92YjkmbNU8089HzgFEAAAAAEjeO1VdkeQMwKm69nq9c+UA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAj4/a7nd+MAzgq7s2afVPyBrAAAABIx1/wDbemIn+lHNT85BmAAAAAAAAB1w1iq9diiOjpqn4QC1TTTTTFNMckRzRAPN67TatzXV0R1fGQRblyq5XNdXTUDwAAD7TVNNUVUzyTE8sSC3h70XrVNcdfTHwkHQAAAAEjeO1VdkeQMwKm69nq9c+UA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAj4/a7nd+MAzgq7s2afVPyBrAAABnx1/9VmYif7181PzkEcAAAAAAAAAFPdUU/qrn/r7ufs5OYG0EnH4n9tz7aZ/86Oj+Z+IMoAAAANe78R+u79lU/wBK+bsnqBVAAAABI3jtVXZHkDMCpuvZ6vXPlANgAAAAAAAAAAAAAAAAAAAAAAAAAAAI+P2u53fjAM4Ku7Nmn1T8gawAAARsXf8A3Xpqj/Mc1PYDgAAAAAAAAADpZv3LNf3UTz9cdUg73d437lE0xEUxPTMdIMgAAAAAALOCxH7rMcv+6earODuAAACRvHaquyPIGYFTdez1eufKAbAAAAAAAAAAAAAAAAAAAAAAAAAAAAR8ftdzu/GAZwVd2bNPqn5A1gAAy7wv/rtfZH+q+bu6wSQAAAAAAAAAAAAAAAAAAAd8Jfmzeir/AJnmq7AWYmJjljoAAABI3jtVXZHkDMCpuvZ6vXPlANgAAAAAAAAAAAAAAAAAAAAAAAAAAAI+P2u53fjAM4Ku7Nmn1T8gawAJmIiZnmiOeZBExN6b16qvq6KY/gHIAAAAAAAAAAAAAAAAAAAAFTduI++3+qqf7UdHYDYAACRvHaquyPIGYFTdez1eufKAbAAAAAAAAAAAAAAAAAAAAAAAAAAAAR8ftdzu/GAZwVd2bNPqn5A1gAx7yv8A224tR019PYCWAAAAAAAAAAAAAAAAAAAAAD3Zu1WrlNdPTHUC5RXTXRFdPPFUcsA+gAkbx2qrsjyBmBU3Xs9XrnygGwAAAAAAAAAAAAAAAAAAAAAAAAAAAEfH7Xc7vxgGcFXdmzT6p+QNYAIuKrqrxFyZ0pjujmBxAAAAAAAAAAAAAAAAAAAAAABS3VcqmiuieimYmO8G4AEjeO1VdkeQMwKm69nq9c+UA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAj4/a7nd+MAzgq7s2afVPyBrABmxGAtXapr5Zpqnp5OiQceFU6yfD6gcKp1k+H1A4VTrJ8PqBwqnWT4fUDhVOsnw+oHCqdZPh9QOFU6yfD6gcKp1k+H1A4VTrJ8PqBwqnWT4fUDhVOsnw+oHCqdZPh9QOFU6yfD6gcKp1k+H1A4VTrJ8PqBwqnWT4fUDhVOsnw+oHCqdZPh9QOFU6yfD6gcKp1k+H1A4VTrJ8PqBwqnWT4fUH3hVOsnwBqsYe3Zo+2jr55memQdAASN47VV2R5AzAqbr2er1z5QDYAAAAAAAAAAAAAAAAAAAAAAAAAAACPj9rud34wDOCruzZp9U/IGsAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjeO1VdkeQMwKm69nq9c+UA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAk7xpmMVVOlETHhyfIGUFDdl+mImzVPJMzy05gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKqqaaZqqnkiOmZBFxN39t6qvqmebsjmByBW3bTMYbl0qpmPL5A1AAAAAAAAAAAAAAAAAAAAAAAAAAAAxbysTVbi7T00f67ATAAdoxeJiOSLlXJ2ge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskD3mJ1kge8xOskHm5eu3P8Adc1R8JBzB6ooqrriinnmqeSAXLVuLdumiOimOQHoAAAAAAAAAAAAAAAAAAAAAAAAAAACYiY5J6AS8XgKqJmu1HLR1x1wDGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD1RRXXVFNETVVPVAKuDwcWY+6rnuTkBpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByu4TD3OeqiOX4xzTkBxndeH+NUd8ZgfOF4fSr8YzAcLw+lX4xmA4Xh9KvxjMBwvD6VfjGYDheH0q/GMwHC8PpV+MZgOF4fSr8YzAcLw+lX4xmA4Xh9KvxjMBwvD6VfjGYDheH0q/GMwHC8PpV+MZgOF4fSr8YzAcLw+lX4xmA4Xh9KvxjMBwvD6VfjGYDheH0q/GMwHC8PpV+MZgOF4fSr8YzAcLw+lX4xmA4Xh9KvxjMBwvD6VfjGYDheH0q/GMwHC8PpV+MZgOF4fSr8YzAcLw+lX4xmA4Xh9KvxjMD1Tu3DR0/dV2zm5AaLdq3bjkopimP4B6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",this.setState((function(e){return{recipes:[].concat(_(e.recipes),[A])}}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement("hr",null),r.a.createElement(V,{recipes:this.state.recipes}),r.a.createElement(J,{createRecipe:this.createRecipe}))}}])&&AA(e.prototype,t),n&&AA(e,n),o}(r.a.Component);function iA(){return r.a.createElement("div",null,"This is a place holder for profile page.")}var lA=function(){return r.a.createElement("h1",null,"Page Not Found")};function uA(){return r.a.createElement(y.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:cA}),r.a.createElement(b.a,{path:"/profile",component:iA}),r.a.createElement(b.a,{component:lA}))}var fA=i.a.Header,sA=i.a.Content,pA=i.a.Footer;function mA(){return r.a.createElement(i.a,null,r.a.createElement(fA,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement(d,null)),r.a.createElement(sA,{className:"site-layout",style:{padding:"0 50px",marginTop:64}},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(uA,null))),r.a.createElement(pA,{style:{textAlign:"center"}},"Created by Tianhui Li and Yanghong Lyu"))}var dA=r.a.createElement(c.a,null,r.a.createElement(mA,null));o.a.render(dA,document.getElementById("root"))}});