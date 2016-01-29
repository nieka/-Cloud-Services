/**
 * Created by NHo on 28-1-2016.
 */
var http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
    var pathname= url.parse(req.url).pathname;

    if(pathname === '/'){
        //toon beschrijving rekenmachine
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Rekenmachine met node.js\n' +
            'Mogelijke optie\'s\n' +
            ' /add/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 bijelkaar optellen\n' +
            ' /sub/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 van elkaar aftrekken\n' +
            ' /mul/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 zullen met elkaar vermenigvuldigen\n' +
            ' /div/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 door elkaar delen\n'
        );
    } else if(pathname.indexOf('/add/') != -1) {
        //optellen
        console.log("add");
        var split = pathname.split("/");
        console.log(split.length);
        if(split.length === 4){
            var antwoord = parseFloat(split[2]) + parseFloat(split[3]);
            res.end("Het antwoord = " + antwoord);
        } else {
            res.end("Verkeerd voormaat. Het voormaat moet  het volgende zijn\n" +
                "/add/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 bijelkaar optellen\n");
        }
    } else if(pathname.indexOf('/sub/') != -1) {
        //optellen
        console.log("add");
        var split = pathname.split("/");
        console.log(split.length);
        if (split.length === 4) {
            var antwoord = parseFloat(split[2]) - parseFloat(split[3]);
            res.end("Het antwoord = " + antwoord);
        } else {
            res.end("Verkeerd voormaat. Het voormaat moet  het volgende zijn\n" +
                " /sub/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 van elkaar aftrekken\n");
        }
    }else if(pathname.indexOf('/div/') != -1) {
        //optellen
        console.log("add");
        var split = pathname.split("/");
        console.log(split.length);
        if (split.length === 4) {
            var antwoord = parseFloat(split[2]) / parseFloat(split[3]);
            res.end("Het antwoord = " + antwoord);
        } else {
            res.end("Verkeerd voormaat. Het voormaat moet  het volgende zijn\n" +
                " /mul/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 zullen met elkaar vermenigvuldigen\n");
        }
    } else if(pathname.indexOf('/mul/') != -1) {
        //optellen
        console.log("add");
        var split = pathname.split("/");
        console.log(split.length);
        if (split.length === 4) {
            var antwoord = parseFloat(split[2]) * parseFloat(split[3]);
            res.end("Het antwoord = " + antwoord);
        } else {
            res.end("Verkeerd voormaat. Het voormaat moet  het volgende zijn\n" +
                " /div/waarde 1/ waarde2 : Zal waarde 1 en waarde 2 door elkaar delen\n");
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found\n');
    }

}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');

