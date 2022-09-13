
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let temp= new LinkedListNode(data);
    temp.next= head;
    head = temp;
    return head;
}

