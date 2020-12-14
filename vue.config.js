var fs = require('fs');

module.exports = {
  devServer: { 
  	https: {
	key: fs.readFileSync('RV.key'),
	cert: fs.readFileSync('RV.crt')
	// ca: fs.readFileSync('/path/to/ca.pem'),
  	}
  }
  
};