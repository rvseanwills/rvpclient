var fs = require('fs');

module.exports = {
  devServer: { 
  	https: {
	key: fs.readFileSync('RV.key'),
    cert: fs.readFileSync('RV.crt'),
    host: '0.0.0.0'
	// ca: fs.readFileSync('/path/to/ca.pem'),
  	}
  }
  
};