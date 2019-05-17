var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream( __dirname + '/readme.txt' , 'utf8');
var myWriteStream = fs.createWriteStream( __dirname + '/writeme.txt' );
/*
myReadStream.on('data', chunk => {
    console.log('new chunk recived');
    //console.log(chunk);
    myWriteStream.write(chunk);
});
myReadStream.pipe(myWriteStream);
*/

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    myReadStream.pipe(res);
    //res.end('Hi Nashaat');
});
server.listen(3000,'127.0.0.1');
