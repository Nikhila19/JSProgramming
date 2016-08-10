var Stack = function(){
   top = null; 
}
Stack.makeNode = function(val) { 
  return {data:val, next:null}
};
Stack.prototype.pop = function(){
  if (this.top == null) { 
    //alert("STACK is EMPTY");
    return null; 
  }
  // console.log("POP ", this.top.data);

  var n = this.top;
  this.top = n.next;

  return n.data;
};
Stack.prototype.push = function(val){
  var newNode = Stack.makeNode(val);
  // console.log("push ", newNode.data);
  newNode.next = this.top;
  this.top = newNode;
  // console.log("top >>> ", this.top.data);
};

Stack.prototype.traverse = function(){
  var t = this.top;
  var len = 0
  while(t != null) {
    console.log("TRAVERSE>>> ",t.data);
    t = t.next;
    len = len + 1;
  }
  return len;
};


var validParens = function(str){
  var len = str.length;
  var c = "";
  var n = "";
  var s = new Stack();
  var valid = true;
  var closeParens = [')', ']', '}'];
  var openParens = ['(', '[', '{'];
  var parensMatches = { ')': '(', ']': '[', '}': '{'}
  
  for (i=0; i< len; i++) {
    c = str.charAt(i);
    if (closeParens.includes(c)) {
      n = s.pop();      
      if ( n == null || n != parensMatches[c]) { 
        valid = false;
        break; 
      } 
      //alert("Popping >>>>> " + n + "; comparing to "+ c);

    }
    if (openParens.includes(c)) { 
      //alert("Pushing >>>>> "+ c);
      s.push(c); 
    }

  }
  if (s.pop() != null ) { valid = false }
  return valid;
}

alert('(ab] is ' + validParens('(ab]'));
alert('([[{{ab] is ' + validParens('([[{{ab]'));
alert('ab]}}p) is ' + validParens('ab]}}p)'));
alert('{{abcd}} is ' + validParens('{{abcd}}'));
// s = new Stack();
// s.pop();
// s.push(10);
// s.push(12);
// // s.traverse();
// var dat = s.pop();
// s.traverse();

