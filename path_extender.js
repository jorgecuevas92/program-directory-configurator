var fs = require("fs");
var path = require("path");
var readline = require("readline");
var HOME = process.env.HOME;
var file = HOME +'/.profile';
var newPath = __dirname + '/bin'
var data = `PATH="$PATH:${newPath}"`

console.log(`\nHome directory path: ${HOME}\n`);
console.log(`\nCurrent directory: ${__dirname}\n`);

if (fs.existsSync("bin")) {
  console.log("\nFound bin directory...\n");
} else {
  console.log("\nBin directory not found...\n");
  console.log("\nCreating bin directory...\n");
  fs.mkdirSync("bin", function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("\nBin directory created...\n");
    }
  });
}

console.log(`\nUsing ${newPath} as new location...\n`);

if (fs.existsSync(file)) {
  console.log(`\n'${HOME}/.profile' found...\n`);
  var contents = fs.readFileSync(file).toString();
  var lines = contents.trim().split('\n');
  var lastLine = lines.slice(-1)[0];

  if (lastLine === data) {
    console.log(`\nFile already contains: ${data}\n`);
  } else {
    fs.appendFile(file, `\n\n${data}`, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('\nWriting File...\n');
      }
    });
  }
} else {
  console.log("\n'.profile' not found...\n");
}

process.on('exit', function(){
  console.log("\nExiting process\n");
});
