import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.value = null;
    this.nextnode = null;
  }

  append(value) {
    let NewNode = new Node(value);
    loopingFunc(this);
    function loopingFunc(path) {
      for (let x in path) {
        if (!path.nextnode) {
          return (path.nextnode = NewNode);
        } else {
          return loopingFunc(path.nextnode);
        }
      }
    }
  }

  prepand(value) {
    let NewPrepend = new Node(value);
    NewPrepend.nextnode = this.nextnode;
    this.nextnode = NewPrepend;
  }

  size() {
    let count = 0;

    looping(this.nextnode);

    return count;

    function looping(path) {
      for (let x in path) {
        if (!path.nextnode) {
          count += 1;

          return;
        }

        if (path.value) {
          count += 1;
          return looping(path.nextnode);
        }
      }
    }
  }

  head() {
    return this.nextnode;
  }

  tail() {
    let tailValue;

    return loopingValue(this.nextnode);

    function loopingValue(path) {
      if (!path.nextnode) {
        tailValue = path;
        return tailValue;
      }

      if (path.nextnode) {
        return loopingValue(path.nextnode);
      }
    }
  }

  at(index) {
    let array = [];
    loopingFunc(this.nextnode);

    return array[index];

    function loopingFunc(path) {
      if (!path.nextnode) {
        array.push(path.value);

        return;
      }

      if (path.value) {
        array.push(path.value);
        loopingFunc(path.nextnode);
      }
    }
  }

  pop() {
    abort(this);

    function abort(path) {
      for (let x in path) {
        if (!path.nextnode) {
          return "yes";
        } else {
          if (abort(path.nextnode) === "yes") {
            path.nextnode = undefined;
          } else {
            return;
          }

          let value = abort(path.nextnode);

          return value;
        }
      }
    }
  }

  contains(value) {
    return abort(this);
    function abort(path) {
      for (let x in path) {
        if (path.value === value) {
          return true;
        } else {
          return abort(path.nextnode);
        }
      }

      return false;
    }
  }

  find(value) {
    let array = [];
    let returnValue = null;
    loopingFunc(this.nextnode);

    array.forEach((element, index) => {
      if (element === value) {
        returnValue = index;
      }
    });

    return returnValue;

    function loopingFunc(path) {
      if (!path.nextnode) {
        array.push(path.value);

        return;
      }

      if (path.value) {
        array.push(path.value);
        loopingFunc(path.nextnode);
      }
    }
  }

  toString() {
    return printing(this.nextnode);

    function printing(path) {
      if (!path.nextnode) {
        return ` ( ${path.value} ) -> null`;
      }

      let string = ` ( ${path.value} ) ->`.concat(printing(path.nextnode));
      return string;
    }
  }
}

export default LinkedList;
