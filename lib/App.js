"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ink = require("ink");

var _home = _interopRequireDefault(require("./pages/home"));

var _notFound = _interopRequireDefault(require("./pages/not-found"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routeConfig = [{
  path: "/",
  component: _home.default
}];

function renderRoute(path, ctx) {
  const [routeConf] = routeConfig.filter(item => item.path === path);
  const history = {
    push: url => ctx.setState({
      currentUrl: url
    })
  };

  if (!routeConf) {
    return (0, _ink.h)(_notFound.default, {
      history: history
    });
  } // TODO: yargs作参数解析


  const Route = () => {
    return (0, _ink.h)(routeConf.component, {
      history: history
    });
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