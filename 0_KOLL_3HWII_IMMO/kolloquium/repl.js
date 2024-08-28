const { fakerDE } = require('@faker-js/faker');
const repl = require('repl');
console.log('REPL is running. You can access fakerDE as faker');
const myRepl = repl.start('> ');
myRepl.context.faker = fakerDE;