const request = require('request');
//const https = require('https')
const { headers, url, proxy } = require('./consts')

const download = (url) => new Promise((resolve, reject) => {

request({headers: headers, 'url': url, 'proxy': proxy}, function (error, response, body) {
  
    if (!error && response.statusCode == 200) {      
      resolve(body) // Print the google web page.      
    }
    else {
      reject(error)      
    }
  
})

// OLD CODE
//  
//  https.get(url, { headers }, (res) => {
//    let data = ''
//
//    res.on('data', (chunk) => {
//      data += chunk
//    })
//
//    res.on('end', () => {
//      resolve(data)
//    })
//  }).on('error', (err) => {
//    reject(err)
//  }) 
  
})

const formatError = (err) => err.message || err.toString()

module.exports = { download, formatError }
