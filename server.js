var request = require('request');

request.get(
    'http://www.yoursite.com/formpage',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);