var parallel = require('run-parallel')

const config = {
    filename: process.env.FILENAME || './my-file.json',
    url: process.env.URL || 'http://example.com',
};

function main() {
    parallel([
        function (callback) {
            require('./add-to-file').execute(config, callback);
        },
        function (callback) {
            require('./detect-file-changes').execute(config, callback);
        }
    ],
    function (err, results) {
        if (results) {
            results.forEach((el) => {
                console.log(`Program ended successfully: ${el}`);
            });
        }
        if (err) {
            err.forEach((el) => {
                console.log(`Program failure: ${el}`);
            })
        }
    });

}

module.exports.main = main;