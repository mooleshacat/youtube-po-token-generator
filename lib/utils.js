const request = require('request');
//const https = require('https')
const { headers, url, proxy } = require('./consts')

const download = (url) => new Promise((resolve, reject) => {

  const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US;q=0.9',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
  }
  
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
