"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("./modules/User/user.resolver");

var _user2 = _interopRequireDefault(_user);

var _merge = require("lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

var _story = require("./modules/Story/story.resolver");

var _story2 = _interopRequireDefault(_story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = (0, _merge2.default)([_story2.default, _user2.default]);

exports.default = resolvers;