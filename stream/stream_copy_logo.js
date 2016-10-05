var fs = require('fs');

var source = fs.readFileSync('./test.jpg');

fs.writeFileSync('stream_copy_logo.png', source);