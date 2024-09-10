const request = require('request');
//const https = require('https')
const { headers, url, proxy } = require('./consts')

const download = (url) => new Promise((resolve, reject) => {

    request({headers: headers, 'url': url, 'proxy': proxy}, function (error, response, body) {
    
        if (!error && response.statusCode == 200) {
          resolve(body) // Print the google web page.
        }
        else {
          reject(error).toString()
        }
    
    })

})

const formatError = (err) => err.message || err.toString()

module.exports = { download, formatError }
