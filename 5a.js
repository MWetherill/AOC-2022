const { Console } = require('console')
const fs = require('fs')

try {
  var input = fs.readFileSync('5-input.txt', 'utf8')
  input = input.split('\n\n')
  var stackStart = input[0]
  var procedure = input[1]
  procedure = procedure.split('\n')
} catch (err) {
  console.error(err)
}

// set stack arrays

// split the input stacks
stackStart = stackStart.split('\n')

// determine number of stacks in starting input
numberOfStacks = stackStart[stackStart.length-1].replace(/\s/g, "");
numberOfStacks = numberOfStacks[numberOfStacks.length-1]

// add [-] to all column gaps and then split the array item into a new array
for (var i = 0; i < stackStart.length - 1; i++) {
  stackStart[i] = stackStart[i].replace(/  +/g, "[-]")
  stackStart[i] = stackStart[i].replace(/\s/g, "")
  stackStart[i] = stackStart[i].match(/.{1,3}/g)
}
stackStart.splice(-1)

// create array of stacks with a blank array for each stack in the input
var stacks = [];
for (var i = 0; i < numberOfStacks; ++i) {
    stacks[i] = [];
}

// re-arrange from input columns into new arrays

// this is what I need to set out in a loop
// stacks[0].push(stackStart[0][0])
// stacks[0].push(stackStart[1][0])
// stacks[0].push(stackStart[2][0])
// stacks[0].reverse()
// stacks[0] remove all [-]
// stacks[1].push(stackStart[0][1])
// stacks[1].push(stackStart[1][1])
// stacks[1].push(stackStart[2][1])
// stacks[1].reverse()
// stacks[1] remove all [-]
// stacks[2].push(stackStart[0][2])
// stacks[2].push(stackStart[1][2])
// stacks[2].push(stackStart[2][2])
// stacks[2].reverse()
// stacks[2] remove all [-]

for (var i = 0; i < stacks.length; i++) {
  for (var j = 0; j < stackStart[i].length; j++) {
    stacks[i].push(stackStart[j][i])
  }
  stacks[i].reverse()
  var index = stacks[i].indexOf("[-]");
  if (index > -1) { 
    stacks[i].splice(index)
  }
}

//////////////

//  remove wording from procedure
for (var i = 0; i < procedure.length; i++) {
  procedure[i] = procedure[i].replace('move ', '')
  procedure[i] = procedure[i].replace(' from ', '')
  procedure[i] = procedure[i].replace(' to ', '')
  procedure[i] = procedure[i].split('')
}

// MOVE //FROM //TO

// funcyion to process movers
function movers(input) {
  var num = parseInt(input[0])
  console.log("num: " + num)
  var stackFrom = stacks[input[1] - 1]
  console.log("stackFrom: " + stackFrom)
  var stackTo = stacks[input[2] - 1]
  console.log("stackTo: " + stackTo)
  var spliceLast = stackFrom.length - 1
  var spliceFirst = spliceLast - num
  console.log(spliceFirst, spliceLast)
  let movers = stackFrom.splice(spliceFirst, spliceLast)
  console.log(movers)
  stacks[input[1] -1] = stackFrom
  stacks[input[2] -1] = stackTo
  stacks[input[2] -1].push(movers)
  console.log("stackTo: " + stacks[input[2] -1])
  console.log("\n////////////\n")
}

// loop through procedure and apply movers function

console.log("/////TEST////\n")
movers(procedure[0])
movers(procedure[1])

console.log("stack 1: " + stacks[0])
console.log("stack 2: " + stacks[1])
console.log("stack 3: " + stacks[2])