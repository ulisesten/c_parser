# c_parser

Node.js url parser written in c for speed up your server

## usage

    var parser = require('simple_c_parser');

    var parsed-url = parser.parse('www.my-website.com?foo=bar');

    //output will be a json object

    //{ path: www.my-website.com,
    //  foo: bar }
