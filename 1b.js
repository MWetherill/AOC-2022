const fs = require('fs')

try {
  var input = fs.readFileSync('1-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var inputSplit = input.split("\n\n");
var data = [];
for (i = 0; i < inputSplit.length; i++) {
  data.push(inputSplit[i].split(/[ \n]/))
}
///////////////

var allElves = []

for (var i = 0; i < data.length; i++ ) {
  var elfTotal = 0;
  for (var j = 0; j < data[i].length; j++) {
    elfTotal = elfTotal + parseInt(data[i][j]);
  }
  allElves.push(elfTotal)
}

const sorted = [...allElves].sort((a,b)=>a-b)

highestElf1 = sorted[sorted.length - 1]
highestElf2 = sorted[sorted.length - 2]
highestElf3 = sorted[sorted.length - 3]

console.log(highestElf1 + highestElf2 + highestElf3)