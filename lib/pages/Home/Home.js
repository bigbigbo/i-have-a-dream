"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ink = require("ink");

var _inkBox = _interopRequireDefault(require("ink-box"));

var _inkGradient = _interopRequireDefault(require("ink-gradient"));

var _inkBigText = _interopRequireDefault(require("ink-big-text"));

var _inkSelectInput = _interopRequireDefault(require("ink-select-input"));

var _inkDivider = _interopRequireDefault(require("ink-divider"));

var _inkCheckboxList = require("ink-checkbox-list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = [{
  label: "查看往期开奖结果",
  value: "/award-result"
}, {
  label: "机选一下，一夜暴富",
  value: "/random"
}, {
  label: "打赏一下",
  value: "/tip"
}];

class Home extends _ink.Component {
  constructor(...args) {
    super(...args);

    this.handleSelect = ({
      value
    }) => {
      const {
        history
      } = this.props;
      history.push(value);
    };
  }

  render() {
    return (0, _ink.h)(_ink.Fragment, null, (0, _ink.h)(_inkBox.default, {
      borderColor: "cyan",
      padding: 1
    }, (0, _ink.h)(_inkGradient.default, {
      name: "rainbow"
    }, (0, _ink.h)(_inkBigText.default, {
      text: "i have a"
    })), (0, _ink.h)(_inkGradient.default, {
      name: "rainbow"
    }, (0, _ink.h)(_inkBigText.default, {
      text: "dream"
    }))), (0, _ink.h)("br", null), (0, _ink.h)(_inkDivider.default, {
      dividerChar: "=",
      title: "\u8BF7\u9009\u62E9"
    }), (0, _ink.h)(_inkCheckboxList.List, {
      onSubmit: list => {
        console.log(list);
        process.exit(0);
      }
    }, (0, _ink.h)(_inkCheckboxList.ListItem, {
      value: "1"
    }, "option1"), (0, _ink.h)(_inkCheckboxList.ListItem, {
      value: "2"
    }, "option2"), (0, _ink.h)(_inkCheckboxList.ListItem, {
      value: "3"
    }, "option3"), (0, _ink.h)(_inkCheckboxList.ListItem, {
      value: "4"
    }, "option4")));
  }

}

var _default = Home;
exports.default = _default;