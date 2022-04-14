"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var storyInputToStory = exports.storyInputToStory = function storyInputToStory(args, userId) {
  var data = {
    text: args.input.text,
    author: {
      connect: { id: userId }
    },
    tags: {
      connect: args.input.tags
    }
  };
  return data;
};