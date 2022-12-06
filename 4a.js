const fs = require('fs')

try {
  var input = fs.readFileSync('4-input.txt', 'utf8')
  input = input.split("\n");
} catch (err) {
  console.error(err)
}

// get the range as an array
function arrayRange(low, high) {
  var arrayRange = [];
  for (var i = low; i <= high; i++) {
    arrayRange.push(i);
  }
  return arrayRange
}

// copmare 2 arrays

function compareArray(a, b) {
  if (a.sort().toString() == b.sort().toString()) {
    return true
  } else {
    return false
  }
}


var total = 0

for (var i = 0; i < input.length; i++) {
  var elves = input[i].split(',')
  var elf1 = elves[0].split('-')
  var elf2 = elves[1].split('-')
  var elf1Low = parseInt(elf1[0])
  var elf1High = parseInt(elf1[1])
  var elf2Low = parseInt(elf2[0])
  var elf2High = parseInt(elf2[1])
  var elf1range = arrayRange(elf1Low, elf1High)
  var elf2range = arrayRange(elf2Low, elf2High)
  var matches = elf1range.filter(e => elf2range.indexOf(e) !== -1);
  if (compareArray(elf1range, matches) || (compareArray(elf2range, matches))) {
    total += 1
  }
}

console.log(total)
