'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Routes = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = exports.Routes = function Routes() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var Router = _express2.default.Router();

    Router.get('/', function (req, res, next) {
        res.sendFile('index.html', { root: _path2.default.join('' + __dirname, '../../', 'public') });
    });

    Router.get('/*', _express2.default.static(_path2.default.join('' + __dirname, '../../', 'public')));

    Router.get('/build/*', _express2.default.static(_path2.default.join('' + __dirname, '../../', 'build')));

    Router.get('/public/*', _express2.default.static(_path2.default.join('' + __dirname, '../../', 'public')));

    Router.get('/assets/*', _express2.default.static(_path2.default.join('' + __dirname, '../../', 'app')));

    return Router;
};

exports.default = Routes;
//# sourceMappingURL=routes.js.map