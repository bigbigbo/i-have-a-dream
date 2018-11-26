#!/usr/bin/env node
"use strict";

var _ink = require("ink");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ink.render)((0, _ink.h)(_App.default, null));