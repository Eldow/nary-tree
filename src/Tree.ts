import * as t from 'io-ts';

export interface Node {
  tag: 'node',
  children: Tree[],
}

export interface Leaf {
  tag: 'leaf',
  value: string,
}

type Tree = Node | Leaf;

export const Tree = t.recursion<Tree>('Tree', self => t.union([
  t.exact(t.interface({
    tag: t.literal('node'),
    children: t.array(self)
  })),
  t.exact(t.interface({
    tag: t.literal('leaf'),
    value: t.string
  }))])
)