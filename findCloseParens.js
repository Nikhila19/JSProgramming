//Given a valid, well-formed string of parentheses, and the position of open parens, find the index of the closing parenthesis
var findCloseParens = function(str, openParens) {
  var len = str.length;
  var closeParens = openParens;
  var ctr = 1;
  var i = openParens;
  if (str.charAt(openParens) != '(') { return -1 } 
  while (ctr > 0 && i < len) {
    i = i + 1;

    if (str.charAt(i) == ')') { ctr = ctr - 1; }
    if (str.charAt(i) == '(') { ctr = ctr + 1; }
  }
  return i;
}

findCloseParens("abc(def()ghi(jk))lmn", 3)