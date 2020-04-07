const serve = require('./server');
serve({ port: process.env.PORT || 3456 }).catch(console.error);
