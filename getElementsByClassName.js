//find elements by classname
var getDocumentElements = function(root, classname) {
  var element = root;
  var searchClass = " " + classname + " "
  var wantedElements = [];
  console.log("Searching for .... ", searchClass);

  (function traverse(node) {
    for(var i=0; i < node.childNodes.length; i++) {
      var currentNode = node.childNodes[i];
      var classes = currentNode.className;
//      console.log(">>>>>> currentNode= ", currentNode);
      console.log(">>>>>> classes= ", classes);
      if (classes && ~((" " + classes + " ").indexOf(searchClass))) {
            console.log("currentNode= ", currentNode, " classes= ", classes);

        console.log(">>>>>>>>> found ", searchClass);
        
        wantedElements.push(currentNode);
        console.log(">>>>>>>>> ", wantedElements);
        
      }
      currentNode.childNodes && traverse(currentNode)
    }
  })(element);
    return wantedElements;

}
console.log(">>>>>>> elememts => ", getDocumentElements(document.documentElement, "js-gps-track"))