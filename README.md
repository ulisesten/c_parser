# simple_c_parser

Node.js url and cookie parser written in c for speed up your server

## installation

    npm install simple_c_parser

## usage with url

    var parser = require('simple_c_parser');

    var parsed-url = parser.parse('www.my-website.com?foo=bar');

    //output will be a json object

    //{ path: 'www.my-website.com',
    //  foo: 'bar' }

## usage with cookies

    var parsed_cookie = parser.milk(my_cookie);

