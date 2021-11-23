
import http from 'http'

 
const server = http.createServer(function(request, response){
     response.write(`Hello world from ${request.url}`);
    response.end();
});

server.listen(3000, function(){
    console.info('Server started');
});