"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var userInputToUser = exports.userInputToUser = function userInputToUser(args, hashedPassword) {
  var nameArray = args.input.name.split(" ");
  var data = {
    password: hashedPassword,
    username: args.input.username,
    gender: args.input.gender,
    first_name: nameArray[0],
    last_name: nameArray[1],
    email: args.input.email
  };
  return data;
};