"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PathReporter_1 = require("io-ts/lib/PathReporter");
var ThrowReporter_1 = require("io-ts/lib/ThrowReporter");
var Tree_1 = require("./Tree");
console.log(Tree_1.Tree.is({ value: 'Giulio', tag: 'leaf' }));
var result = Tree_1.Tree.decode({ value: 'Giulio', tag: 'leaf' });
console.log(result);
console.log(PathReporter_1.PathReporter.report(result));
// => ['Invalid value undefined supplied to : { name: string, age: number }/age: number']
ThrowReporter_1.ThrowReporter.report(result);
// => throws 'Invalid value undefined supplied to : { name: string, age: number }/age: number'
//# sourceMappingURL=index.js.map