import { calcCaller } from './helper/comparisonHelper';
calcCaller('vvv < aaa && aaa === aaa');

console.log(calcCaller('1 <= 1 && 1 > 1 || a !== a || a === a && b === b'));