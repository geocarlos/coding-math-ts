const fs = require('fs');

const epNumber = process.argv[2];
const dir = __dirname + '/../Episode' + epNumber;

if (fs.existsSync(dir)) {
    console.log('Directory already exists.');
    return;
}
fs.mkdirSync(dir);
fs.copyFileSync(__dirname + '/main.ts', dir + '/main.ts');
fs.copyFileSync(__dirname + '/package.json', dir + '/package.json');
fs.copyFileSync(__dirname + '/tsconfig.json', dir + '/tsconfig.json');

const content = fs.readFileSync(__dirname + '/index.html');
fs.writeFileSync(dir + '/index.html', content.toString().replace('{{NUMBER}}', epNumber));