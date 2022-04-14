"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUser = exports.getUser = function getUser(token) {
  if (token === "" || token == null) {
    return null;
  }
  try {
    var decoded = _jsonwebtoken2.default.verify(token, "fjkdsjfklsdjkfjskd");
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};