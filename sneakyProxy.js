var net = require('net');
var client, serverConn, clientConn;

var server = net.createServer(function(serverConn) {
    
    console.log('server connected');
    client = net.connect(22, '10.0.1.15', function(clientConn) {
        console.log('client connected');
    });
    
    client.on('data', function(data) {
        serverConn.write(data);
    });
    
    serverConn.on('data', function(data) {
        console.log('recieved data');
        client.write(data);
    });
    
    //serverConn.pipe(serverConn);
    serverConn.on('end', function() {
        console.log('server disconnected');
        console.log('client disconnected');
        client.end();
    });

});

server.listen(1234, function() {
    console.log('server listening');
});