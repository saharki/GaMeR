require('babel-core/register')
require('babel-polyfill')
import Path from 'path'
import Express from 'express'
import Helmet from 'helmet'
import BodyParser from 'body-parser'
import Cors from 'cors'
// import Session from 'express-session'
import Session from 'cookie-session'
import CookieParser from 'cookie-parser'

import { promisify as Promisify } from 'util'

import Routes from './routes'


let internals = {}

module.exports.init = (opts) => {
    const app = internals.app = Express()
          
    app.set('trust proxy', 1) 
    app.use(Session({
        secret: 'key',
        name: 'name',
        proxy: true,
        resave: true,
        saveUninitialized: true,
        duration: 30 * 60 * 1000,
        activeDuration: 5 * 60 * 1000,
        maxAge: 3600000,
    }))

    // secure apps by setting various HTTP headers
    app.use(Helmet())

    // enable CORS - Cross Origin Resource Sharing
    app.use(Cors())

    app.use(CookieParser())

    // parse body params and attache them to req.body
    app.use(BodyParser.json())
    app.use(BodyParser.urlencoded({ extended: true }))

    app.use(Routes(opts))
    
    app.use(function(err, req, res, next) {
        console.error(err)
    })

    app.listen(opts.port, error => {
        error
            ?
            console.error(error) :
            console.info(`Listening on port ${opts.port}. Visit http://localhost:${opts.port}/ in your browser.`)
    })
}
