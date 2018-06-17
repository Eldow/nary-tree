"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = require("./Tree");
var simpleLeaf = { value: 'A leaf value', tag: 'leaf' };
var emptyNode = { children: [], tag: 'node' };
var simpleNode = { children: [simpleLeaf], tag: 'node' };
var complexTree = {
    children: [
        simpleLeaf,
        __assign({}, simpleNode, { children: [
                simpleLeaf,
                simpleNode,
                __assign({}, simpleNode, { children: [
                        simpleLeaf,
                        simpleNode,
                        simpleNode
                    ] }),
            ] }),
        simpleNode
    ],
    tag: 'node'
};
test('null tree', function () {
    expect(Tree_1.Tree.is(null)).toBe(false);
});
test('null leaf', function () {
    expect(Tree_1.Tree.is(__assign({}, simpleLeaf, { value: null }))).toBe(false);
});
test('null node', function () {
    expect(Tree_1.Tree.is(__assign({}, simpleNode, { children: null }))).toBe(false);
});
test('leaf with wrong props', function () {
    expect(Tree_1.Tree.is(__assign({}, simpleLeaf, { yolo: 'swag' }))).toBe(false);
});
test('node with wrong props', function () {
    expect(Tree_1.Tree.is(__assign({}, simpleNode, { swag: 'yolo' }))).toBe(false);
});
test('simple leaf', function () {
    expect(Tree_1.Tree.is(simpleLeaf)).toBe(true);
});
test('simple leaf with wrong tag', function () {
    var wrongTagLeaf = __assign({}, simpleLeaf, { tag: 'yolo' });
    expect(Tree_1.Tree.is(wrongTagLeaf)).toBe(false);
});
test('simple leaf with wrong value', function () {
    var wrongTypeLeaf = __assign({}, simpleLeaf, { value: 5 });
    expect(Tree_1.Tree.is(wrongTypeLeaf)).toBe(false);
});
test('simple node with wrong tag', function () {
    var wrongTagNode = __assign({}, simpleNode, { tag: 'yolo' });
    expect(Tree_1.Tree.is(wrongTagNode)).toBe(false);
});
test('simple node with wrong value', function () {
    var wrongTypeNode = __assign({}, simpleNode, { children: 42 });
    expect(Tree_1.Tree.is(wrongTypeNode)).toBe(false);
});
test('empty node', function () {
    expect(Tree_1.Tree.is(emptyNode)).toBe(true);
});
test('node with one leaf', function () {
    expect(Tree_1.Tree.is(simpleNode)).toBe(true);
});
test('complex tree', function () {
    expect(Tree_1.Tree.is(complexTree)).toBe(true);
});
//# sourceMappingURL=test.js.map