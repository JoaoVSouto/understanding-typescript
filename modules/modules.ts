// import { rectangleArea } from './rectangle';
// import { circumferenceArea } from './circumference';
import rectangleArea from './rectangle';
import { circumferenceArea as circ } from './circumference';

console.log('Module loaded...');
console.log(rectangleArea(7, 8));
console.log(circ(2));

const { sayHello } = require('./new');

console.log(sayHello('John'));
