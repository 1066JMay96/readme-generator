const fs = require('fs');

exports.readFile = function(){
return JSON.parse(fs.readFileSync('db.json'));

}
exports.writeFile = function(data) {
fileContent =exports.readFile();
fileContent.push(data)
fs.writeFileSync(JSON.stringify(fileContent));
} 
