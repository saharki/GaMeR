'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _util = require('util');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-core/register');
require('babel-polyfill');
// import Session from 'express-session'


var internals = {};

module.exports.init = function (opts) {
    var app = internals.app = (0, _express2.default)();

    app.set('trust proxy', 1);
    app.use((0, _cookieSession2.default)({
        secret: 'key',
        name: 'name',
        proxy: true,
        resave: true,
        saveUninitialized: true,
        duration: 30 * 60 * 1000,
        activeDuration: 5 * 60 * 1000,
        maxAge: 3600000
    }));

    // secure apps by setting various HTTP headers
    app.use((0, _helmet2.default)());

    // enable CORS - Cross Origin Resource Sharing
    app.use((0, _cors2.default)());

    app.use((0, _cookieParser2.default)());

    // parse body params and attache them to req.body
    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: true }));

    app.use((0, _routes2.default)(opts));

    app.use(function (err, req, res, next) {
        console.error(err);
    });

    app.listen(opts.port, function (error) {
        error ? console.error(error) : console.info('Listening on port ' + opts.port + '. Visit http://localhost:' + opts.port + '/ in your browser.');
    });
};
//# sourceMappingURL=server.js.map