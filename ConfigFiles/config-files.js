const config = require('./config/config.json');

console.log();
console.log('**************************************************************');
console.log('********* Working With Config Files Programmatically *********');
console.log('**************************************************************');
console.log();
		
console.log('===== Properties from: config.json =====');

console.log(`username  =  ${config.username}`);
console.log(`url       =  ${config.url}`);
console.log(`port      =  ${config.port}`);
		
console.log();
