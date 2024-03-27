const path = require('path');
module.exports = {
    // other configurations...
    resolve: {
        fallback: {
            stream: require.resolve('stream-browserify')
            ,
            "url": require.resolve("url/")
        }
    },

};
