// Modules
const names = require('./4_module1');
const sayHi = require('./5_module2');
const data = require('./6_module3');
// console.log(names)
console.log(data);
console.log(names);
require('./7_module4');
sayHi('Susan');
sayHi(names.John);
sayHi(names.Peter);