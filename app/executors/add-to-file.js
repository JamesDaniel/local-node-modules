const fs = require('fs');
const delay = require('../async-utils').delay;

async function addToFile(config) {
    while (true) {
        await delay(5000);
        
        const data = JSON.parse(fs.readFileSync(config.filename, 'utf8'));
        data.number = data.number + 1;

        await fs.writeFileSync(config.filename, JSON.stringify(data));
    }
}

function execute(config, callback) {
    try {
        addToFile(config).then(() => {
            callback(null, 'add-to-file.js');
        })
    } catch (err) {
        callback('add-to-file.js');
    }
}

module.exports.execute = execute;