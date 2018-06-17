import { Tree } from './Tree';

const simpleLeaf = { value: 'A leaf value', tag: 'leaf' };
const emptyNode = { children: [], tag: 'node' };
const simpleNode = { children: [simpleLeaf], tag: 'node' };

describe('nullity tests', () => {
  test('null tests', () => {
    expect(Tree.is(null)).toBe(false);
  });

  test('null leaf', () => {
    expect(Tree.is({ ...simpleLeaf, value: null })).toBe(false);
  });

  test('null node', () => {
    expect(Tree.is({ ...simpleNode, children: null })).toBe(false);
  });
})

describe('wrong props tests', () => {
  test('leaf with wrong props', () => {
    expect(Tree.is({ ...simpleLeaf, yolo: 'swag' })).toBe(false);
  });

  test('node with wrong props', () => {
    expect(Tree.is({ ...simpleNode, swag: 'yolo' })).toBe(false);
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
    const wrongTagLeaf = { ...simpleLeaf, tag: 'yolo' };
    expect(Tree.is(wrongTagLeaf)).toBe(false);
  });

  test('simple node with wrong tag', () => {
    const wrongTagNode = { ...simpleNode, tag: 'yolo' };
    expect(Tree.is(wrongTagNode)).toBe(false);
  });

})

describe('wrong values tests', () => {
  test('simple leaf with wrong value', () => {
    const wrongTypeLeaf = { ...simpleLeaf, value: 5 };
    expect(Tree.is(wrongTypeLeaf)).toBe(false);
  });

  test('simple node with wrong value', () => {
    const wrongTypeNode = { ...simpleNode, children: 42 };
    expect(Tree.is(wrongTypeNode)).toBe(false);
  });
})