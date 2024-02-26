class Node {
  constructor() {
    this.isEndOfWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (curr.children[char] === undefined) {
        curr.children[char] = new Node();
      }
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }
  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (curr.children[char] === undefined) {
        return false;
      }
      curr = curr.children[char];
    }
    return curr.isEndOfWord;
  }
  deleteWord(word) {
    return this._deleteWordHelper(this.root, word, 0);
  }

  _deleteWordHelper(currentNode, word, level) {
    if (!currentNode) {
      return false; // Word not found in the trie
    }

    const char = word[level];
    const childNode = currentNode.children[char];
    // If the current character is not found in the trie, return false
    if (!childNode) {
      return false;
    }
    // If we are at the last letter of the word and this node is the only child
    // (meaning this character is not a prefix of any other word)
    if (
      level === word.length - 1 &&
      Object.keys(childNode.children).length === 0
    ) {
      delete currentNode.children[char];
      return true;
    }
    // If this is the last letter of the word, set the endOfWord flag to false
    if (level === word.length - 1) {
      childNode.isEndOfWord = false;
      return true;
    }
    // Recursively delete the word in the child node
    const deleted = this._deleteWordHelper(childNode, word, level + 1);
    // If the deleted word has no children, remove the child node from its parent
    if (deleted && Object.keys(childNode.children).length === 0) {
      delete currentNode.children[char];
    }
    return deleted;
  }
}
let tri = new Trie();
// tri.insert('car')
tri.insert("can");
tri.insert("car");
// console.log(tri.delete('can'))
console.log(tri.search("vala"));
console.log(tri.search("car"));
