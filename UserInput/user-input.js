const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log();
console.log('**************************************************************');
console.log('********** Working With User Input Programmatically **********');
console.log('**************************************************************');
console.log();
		
console.log('===== Input from Command Line Args =====');
if (process.argv.length > 2) {
    for (const arg of process.argv.slice(2)) {
	    console.log(arg);
	}
} else {
	console.log('No command line args found');
}
	
console.log();
console.log('===== Input from prompts =====');

readline.question(`Please enter your name: `, name => {
    console.log(`Hello ${name}`)
    console.log();
    readline.close()
});
		
console.log();
