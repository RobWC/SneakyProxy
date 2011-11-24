var net = require('net');
var server = new.createServer(function(conn) {
    console.log('server connected');
    conn.on('end', function() {
        console.log('server disconnected');
    });
    conn.write('hello\r\n');
    conn.pipe(c);
});
server.listen(1234, function() {
    console.log('server listening');
});