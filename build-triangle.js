function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ".repeat(j) + "\n";
    }
  return line;
}

console.log(makeLine(50));