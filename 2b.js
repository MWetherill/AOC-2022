const fs = require('fs')

try {
  var input = fs.readFileSync('2-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var inputSplit = input.split("\n");
var data = [];
for (i = 0; i < inputSplit.length; i++) {
  data.push(inputSplit[i].split(/[ \n]/))
}
///////////////

var input = [] 

for (var i = 0; i < data.length; i++) {
  input.push(data[i].join(''));
}

var totalScore = 0;
for (var i = 0; i < input.length; i++) {
  switch(input[i]) {
    case 'AX':
      totalScore += 3;
      break;
    case 'AY':
      totalScore += 4;
      break;
    case 'AZ':
      totalScore += 8;
      break;
    case 'BX':
      totalScore += 1;
      break;
    case 'BY':
      totalScore += 5;
      break;
    case 'BZ':
      totalScore += 9;
      break;
    case 'CX':
      totalScore += 2;
      break;
    case 'CY':
      totalScore += 6;
      break;
    case 'CZ':
      totalScore += 7;
      break;
  }
}

console.log(totalScore)