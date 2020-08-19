const config = require('./config')
if (process.env.WEBPACK_DEV_SERVER){
    require('./config/dev')(config)
}
module.exports = config

