import Express from 'express'
import _ from 'lodash'
import Path from 'path'

export const Routes = (opts = {}) => {
    const Router = Express.Router()
    
    Router.get('/', (req, res, next) => {
        res.sendFile('index.html', { root: Path.join(`${__dirname}`, '../../', 'public') })
    })
    
    Router.get('/*',  Express.static(Path.join(`${__dirname}`, '../../', 'public')))
    
    Router.get('/build/*', Express.static(Path.join(`${__dirname}`, '../../', 'build')))

    Router.get('/public/*', Express.static(Path.join(`${__dirname}`, '../../', 'public')))    
    
    Router.get('/assets/*', Express.static(Path.join(`${__dirname}`, '../../', 'app')))

    return Router
}

export default Routes