"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("./modules/User/user.typedef");

var _user2 = _interopRequireDefault(_user);

var _story = require("./modules/Story/story.typedef");

var _story2 = _interopRequireDefault(_story);

var _merge = require("@graphql-tools/merge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typedefs = (0, _merge.mergeTypeDefs)([_user2.default, _story2.default]);

exports.default = typedefs;