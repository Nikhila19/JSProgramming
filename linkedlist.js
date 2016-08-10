function LinkedList(){
	head = null;
	tail = null;
}

LinkedList.makeNode = function(val) {
  var n = { data: val, next: null };
  return n;
};
LinkedList.prototype.addToEnd = function(val) {
	var n = LinkedList.makeNode(val);
	if (this.head == null) {
		this.head = n;
		this.tail = n;
	} else {
		this.tail.next = n;
		this.tail = n;
	}
};
LinkedList.prototype.remove = function(val) {
  var current = head;
  var prev = null;
  
  while(current != null) {
  	if (current.data == val){ 
	  if (prev == null) { this.head = current.next; }
      if (current.next == null) { prev.next = null; }
      else { prev.next = current.next; }
      break;
  	} else {
  		prev = current;
	  	current = current.next;
  	}
  }
};
LinkedList.prototype.traverse = function(){
	var current = this.head;
	while (current != null ) {
	  if (current != null) { 
	  	console.log(current.data);
	    current = current.next; 
	  }
    }
};

sll = new LinkedList();
sll.addToEnd(10);
sll.addToEnd(12);
sll.addToEnd(9);
sll.addToEnd(100);
sll.traverse();