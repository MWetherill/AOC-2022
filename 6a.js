const fs = require('fs')

try {
  var input = fs.readFileSync('6-input.txt', 'utf8')
  input = input.split('')
} catch (err) {
  console.error(err)
}

// 

var count = 0;

for (var i = 0; i < input.length - 3; i++) {
  var four = []
  four.push(input[i], input[i + 1], input[i + 2], input[i + 3])
  var fourFiltered = four.filter(function(item, pos){
    return four.indexOf(item)== pos; 
  });
  if (four.length + fourFiltered.length == 8) {
    break
  }
  count += 1
}

console.log(count + 4)

