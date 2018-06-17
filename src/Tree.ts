import { Type, identity, success, failure, mixed } from 'io-ts';
import { isEqual, isArray, isString, isNil } from 'lodash';

export interface Node {
  tag: 'node',
  children: Tree[],
}

export interface Leaf {
  tag: 'leaf',
  value: string,
}

type Tree = Node | Leaf;

const checkExactObjectProperties = (o: object, array: Array<string>): Boolean =>
  isEqual(Object.getOwnPropertyNames(o).sort(), array.sort())

const topDownThatTreeFrom = (root: mixed) => {
  if (isNil(root) || typeof root !== 'object') return false;

  if ('tag' in root && isString(root.tag)) {
    if (root.tag === 'leaf' && checkExactObjectProperties(root, ['tag', 'value'])) {
      return (isString(root.value));
    } else if (root.tag === 'node' && checkExactObjectProperties(root, ['tag', 'children'])) {
      if (isArray(root.children)) {
        root.children.forEach(child => {
          return topDownThatTreeFrom(child);
        });
        return true;
      }
    }
  }

  return false;
}

export class TreeType extends Type<Tree> {
  // equivalent to Type<Tree, Tree, mixed> as per type parameter defaults
  readonly _tag: 'TreeType' = 'TreeType'
  constructor() {
    super(
      'Tree',
      (m): m is Tree => topDownThatTreeFrom(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    )
  }
}

export const Tree: Type<Tree> = new TreeType();