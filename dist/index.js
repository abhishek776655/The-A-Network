"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _client = require("@prisma/client");

var _authorization = require("./services/authorization");

var _resolver = require("./resolver");

var _resolver2 = _interopRequireDefault(_resolver);

var _typedefs = require("./typedefs");

var _typedefs2 = _interopRequireDefault(_typedefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("apollo-server"),
    ApolloServer = _require.ApolloServer;

var prisma = new _client.PrismaClient();
var server = new ApolloServer({
  resolver: _resolver2.default,
  typeDefs: _typedefs2.default,
  context: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
      var req = _ref2.req;
      var token, user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.headers.authorization || "";
              _context.next = 3;
              return (0, _authorization.getUser)(token);

            case 3:
              user = _context.sent;
              return _context.abrupt("return", {
                user: user,
                prisma: prisma
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function context(_x) {
      return _ref.apply(this, arguments);
    };
  }()
});

server.listen({ port: process.env.PORT || 4000 }).then(function (_ref3) {
  var url = _ref3.url;

  console.log("\uD83D\uDE80  Server ready at " + url);
});