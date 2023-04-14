class Queue {
    constructor() {
        this.linkedList = new LinkedList()
    }

    enqueue(val){
        this.linkedList.append(val)
    }

}