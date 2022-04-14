"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _story = require("./story.dto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Mutation: {
    createStory: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, args, context, info) {
        var story;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (context.user) {
                  _context.next = 3;
                  break;
                }

                throw new AuthenticationError("you must be logged in");

              case 3:
                console.log(context.user.userId);
                _context.next = 6;
                return context.prisma.story.create({
                  data: (0, _story.storyInputToStory)(args, context.user.userId),
                  include: {
                    author: true
                  }
                });

              case 6:
                story = _context.sent;

                console.log(story);
                return _context.abrupt("return", story);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0);
                return _context.abrupt("return", _context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined, [[0, 11]]);
      }));

      return function createStory(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }()
  }
};