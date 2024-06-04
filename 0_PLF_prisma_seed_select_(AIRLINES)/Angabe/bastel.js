const { faker } = require('@faker-js/faker');
const repl = require('repl');

const replObj = repl.start();
Object.assign(replObj.context, { faker });
