enum Color {
  RED,
  BLACK,
}

class Node {
  public key: number;
  public left?: Node;
  public right?: Node;
  public parent?: Node;
  public color: Color;

  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = Color.BLACK;
  }

  insert = (node: Node): Node => {
    if (node.key > this.key) {
      if (this.right !== null) {
        this.right.insert(node);
      } else {
        this.right = node;
        node.parent = this;
      }
    }

    if (node.key < this.key) {
      if (this.left !== null) {
        this.left.insert(node);
      } else {
        this.left = node;
        node.parent = this;
      }
    }

    return this;
  };
}

class RedBlackTree {
  public root: Node = null;

  insert = (key: number): RedBlackTree => {
    if (!this.root) {
      this.root = new Node(key);
      return this;
    }
    const node = new Node(key);
    this.root.insert(node);

    return this;
  };

  rightRotate(x: Node) {
    const y = x.left;
    x.left = y.right;
    if (y.right !== null) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  }

  leftRotate(x: Node) {
    const y = x.right;
    x.right = y.left;
    if (y.left !== null) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }
}

export { RedBlackTree, Node };
