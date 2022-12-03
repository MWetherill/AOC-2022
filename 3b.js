const fs = require('fs')

try {
  var input = fs.readFileSync('3-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var data = input.split("\n");

// 

function commonChars(A) {
  const [first, ...rest] = A.sort((a,b) => -(a.length - b.length));
  const duplicates = [];
  [...first].forEach(e => {
    let isDuplicate = true;
    for (let x = 0, len = rest.length; x < len; x++) {
      let letters = rest[x];
      const i = letters.search(e);
      if (i !== -1) {
        letters = letters.slice(0, i) + letters.slice(i + 1);
        rest[x] = letters;
      } else {
        isDuplicate = false;
      }
    }
    if (isDuplicate) {
      duplicates.push(e);
    }
  });
  return duplicates;
}

var arrays = [];
var size = 3;
    
while (data.length > 0)
  arrays.push(data.splice(0, size));




var totalCommon = []

for (var i = 0; i < arrays.length; i++) {
  var common = commonChars(arrays[i])
  totalCommon.push(common[0])
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

console.log(total);