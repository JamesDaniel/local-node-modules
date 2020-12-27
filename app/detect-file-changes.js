const fs = require('fs');
const delay = require('./async-utils').delay;

async function detectChanges(config) {
    fs.watch(config.filename, (eventType, filename) => {
        if (filename && eventType === 'change') {
            console.log('Change detected');
            console.log(filename);
            
            const data = fs.readFileSync(filename, 'utf8');
            console.log(data);
        }
    });
}

function execute(config, callback) {
    try {
        detectChanges(config).then(() => {
            callback(null, 'add-to-file.js');
        })
    } catch (err) {
        callback('add-to-file.js');
    }
}

module.exports.execute = execute;