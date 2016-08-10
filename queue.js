// function Queue(){
// 	head = null;
// 	tail = null;
// };

var Queue = function(){
	head = null;
	tail = null;
};
Queue.makeNode = function(val) {
  return {data: val, next: null}
};

Queue.prototype.push = function(val) {
  var n = Queue.makeNode(val);

  if (this.tail == null) { this.tail = n; }
  else { 
    this.tail.next = n; 
    this.tail = n;   
  }
  if (this.head == null) { this.head = n; }
  return n;
};
Queue.prototype.pop = function(val) {
  if (this.head == null) { return; }
  var n = this.head;
  this.head = this.head.next;
  return n;
};

Queue.prototype.traverse = function() {
  var current = this.head;
  if (current == null) { return }
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}