"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = require("./user.dto");

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _apolloServer = require("apollo-server");

var _permission = require("../../services/permission");

var _permission2 = _interopRequireDefault(_permission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    getUsers: _permission2.default.createResolver(function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, args, context, info) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return context.prisma.user.findMany();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }())
  },
  Mutation: {
    register: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(parent, args, _ref3, info) {
        var prisma = _ref3.prisma;
        var doesUserExist, hashedPassword, data, user, ReponseUser;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                doesUserExist = prisma.user.findUnique({
                  where: {
                    email: args.input.email
                  }
                });

                if (!doesUserExist) {
                  _context2.next = 3;
                  break;
                }

                throw new _apolloServer.UserInputError("Email already exist");

              case 3:
                _context2.next = 5;
                return _bcrypt2.default.hash(args.input.password, 12);

              case 5:
                hashedPassword = _context2.sent;
                data = (0, _user.userInputToUser)(args, hashedPassword);
                _context2.next = 9;
                return prisma.user.create({ data: data });

              case 9:
                user = _context2.sent;
                ReponseUser = user;
                return _context2.abrupt("return", ReponseUser);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function register(_x5, _x6, _x7, _x8) {
        return _ref2.apply(this, arguments);
      };
    }(),
    login: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(parent, args, context, info) {
        var user, valid, privateKey, token;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return context.prisma.user.findFirst({
                  where: {
                    email: {
                      equals: args.email
                    }
                  }
                });

              case 2:
                user = _context3.sent;

                if (user) {
                  _context3.next = 5;
                  break;
                }

                throw new Error("No such user found");

              case 5:
                _context3.next = 7;
                return _bcrypt2.default.compare(args.password, user.password);

              case 7:
                valid = _context3.sent;

                if (valid) {
                  _context3.next = 10;
                  break;
                }

                throw new Error("Invalid password");

              case 10:
                privateKey = "fjkdsjfklsdjkfjskd";
                token = _jsonwebtoken2.default.sign({ userId: user.id }, privateKey);
                return _context3.abrupt("return", {
                  token: token,
                  user: user
                });

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function login(_x9, _x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
      };
    }()
  }
};