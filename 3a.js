const fs = require('fs')

try {
  var input = fs.readFileSync('3-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var data = input.split("\n");

// 

function split(str, index) {
  const result = [str.slice(0, index), str.slice(index)];
  return result;
}

function getSameCount(str1, str2) { 
  let commonchar=[]; 
  let count = 0; 
  const obj = str2.split(""); 
  for(const str of str1){ 
    let idx = obj.findIndex(s => s === str); 
    if(idx >= 0){ 
    commonchar.push(obj.find(s => s === str)); 
      count++; 
      obj.splice(idx, 1); 
    } 
  } 
  return commonchar[0]; 
} 

var totalCommon = []

for (var i = 0; i < data.length; i++) {
  var string = data[i]
  var index = data[i].length / 2
  const [first, second] = split(string, index);
  totalCommon.push(getSameCount(first, second));
}

var total = 0;
for (var j = 0; j < totalCommon.length; j++) {
  if (totalCommon[j].toUpperCase() === totalCommon[j]) {
    var value = (totalCommon[j].toLowerCase().charCodeAt(0) - 96) + 26
    total += value
  } else {
    var value = totalCommon[j].charCodeAt(0) - 96
    total += value
  }
}

console.log(total)