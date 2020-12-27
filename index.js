const application = require('./app/main');

try {
    application.main();
} catch (err) {
    console.error("An error occurred in the program main execution.", err);
    process.exit(1);
}
