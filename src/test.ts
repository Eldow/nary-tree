import { Tree } from './Tree';

const simpleLeaf = { value: 'A leaf value', tag: 'leaf' };
const emptyNode = { children: [], tag: 'node' };
const simpleNode = { children: [simpleLeaf], tag: 'node' };

describe('nullity tests', () => {
  test('null tree', () => {
    expect(Tree.is(null)).toBe(false);
  });

  test('empty object', () => {
    expect(Tree.is({})).toBe(false);
  });

  test('null leaf value', () => {
    expect(Tree.is({ ...simpleLeaf, value: null })).toBe(false);
  });

  test('null node children', () => {
    expect(Tree.is({ ...simpleNode, children: null })).toBe(false);
  });
})

describe('wrong props tests', () => {
  test('leaf with wrong props', () => {
    expect(Tree.is({ ...simpleLeaf, foo: 'bar' })).toBe(false);
  });

  test('node with wrong props', () => {
    expect(Tree.is({ ...simpleNode, bar: 'foo' })).toBe(false);
  });
})

describe('right trees tests', () => {
  test('simple leaf', () => {
    expect(Tree.is(simpleLeaf)).toBe(true);
  });

  test('empty node', () => {
    expect(Tree.is(emptyNode)).toBe(true);
  });

  test('node with one leaf', () => {
    expect(Tree.is(simpleNode)).toBe(true);
  });
})

describe('wrong tags tests', () => {
  test('simple leaf with wrong tag', () => {
    expect(Tree.is({ ...simpleLeaf, tag: 'foo' })).toBe(false);
  });

  test('simple node with wrong tag', () => {
    expect(Tree.is({ ...simpleNode, tag: 'bar' })).toBe(false);
  });
})

describe('wrong values tests', () => {
  test('simple leaf with wrong value', () => {
    expect(Tree.is({ ...simpleLeaf, value: 5 })).toBe(false);
  });

  test('simple node with wrong value', () => {
    expect(Tree.is({ ...simpleNode, children: 42 })).toBe(false);
  });
})