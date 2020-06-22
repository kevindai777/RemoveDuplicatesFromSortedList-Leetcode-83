//Objective is to remove duplicate values from a linked list.

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let l1 = new Node(1)
l1.next = new Node(1)
l1.next.next = new Node(5)
l1.next.next.next = new Node(5)
l1.next.next.next.next = new Node(6)


//O(n) solution that uses a hashset (array) and iterates over the set w/
//a new linked list.

let newNode = new Node(-1)
    let temp = newNode
    let set = []
    
let curr = l1

while (curr) {
    if (!set.includes(curr.data)) {
        set.push(curr.data)
    }
    curr = curr.next
}
    
while (set.length) {
    let next = new Node(set.shift())
    temp.next = next
    temp = next
}
    
return newNode.next


//O(n) solution that traverses the linked list and removes all duplicates
//by skipping nodes w/ the same value.

let current = l1
while (current !== null && current.next !== null) {
    if (current.data == current.next.data) {
        current.next = current.next.next
    } else {
        current = current.next
    }
}

return l1