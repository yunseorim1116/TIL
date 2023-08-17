
var _ = require('lodash');
console.time(); // 측정 시작

const original = {profile: {name:'철수', age:12}, grade: 'A'};
JSON.parse(JSON.stringify(original));

console.timeEnd(); // 측정 종료

//////////////////

console.time(); // 측정 시작

const original2 = {profile: {name:'철수', age:12}, grade: 'A'};
 _.cloneDeep(original2);

console.timeEnd(); // 측정 종료

console.time(); // 측정 시작

const original3 = {profile: {name:'철수', age:12}, grade: 'A'};
structuredClone(original3);

console.timeEnd(); // 측정 종료


