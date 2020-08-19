const {merge} = require('webpack-merge')
const common  = require('./config')

module.exports = process.env.WEBPACK_DEV_SERVER ?
    merge(common, require('./config/dev')) :
    merge(common, require('./config/prod'))
