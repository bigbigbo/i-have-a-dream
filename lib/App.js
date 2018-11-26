"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ink = require("ink");

var _Home = _interopRequireDefault(require("./pages/Home"));

var _NotFound = _interopRequireDefault(require("./pages/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routeConfig = [{
  path: "/",
  component: _Home.default
}];

function renderRoute(path, ctx) {
  const [routeConf] = routeConfig.filter(item => item.path === path);

  if (!routeConf) {
    return (0, _ink.h)(_NotFound.default, null);
  }

  const Route = props => {
    const history = {
      push: url => ctx.setState({
        currentUrl: url
      })
    };
    return (0, _ink.h)(routeConf.component, Object.assign({}, props, {
      history: history
    }));
  };

  return (0, _ink.h)(Route, null);
}

class App extends _ink.Component {
  constructor() {
    super();
    this.state = {
      currentUrl: "/"
    };
  }

  render() {
    const {
      currentUrl
    } = this.state;
    return (0, _ink.h)(_ink.Fragment, null, renderRoute(currentUrl, this));
  }

}

var _default = App;
exports.default = _default;