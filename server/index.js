const Server = require('./server') 

let opts = {}
opts.port = process.env.PORT || 8000

Server.init(opts)