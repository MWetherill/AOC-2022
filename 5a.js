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

var highestStack = stackStart.length - 1;

// determine number of stacks in starting input
numberOfStacks = stackStart[stackStart.length-1].replace(/\s/g, "");
numberOfStacks = numberOfStacks[numberOfStacks.length-1]

// add [-] to all column gaps and then split the array item into a new array
for (var i = 0; i < stackStart.length - 1; i++) {
  stackStart[i] = stackStart[i].replace(/    /g, "[-]")
  stackStart[i] = stackStart[i].replace(/\s/g, "")
  stackStart[i] = stackStart[i].match(/.{1,3}/g)
}
stackStart.splice(-1)

// create array of stacks with a blank array for each stack in the input
var stacks = [];
for (var i = 0; i < numberOfStacks; ++i) {
    stacks[i] = [];
}

// // re-arrange from input columns into new arrays
for (var i = 0; i < numberOfStacks; i++) {
  for (var j = 0; j < highestStack; j++) {
    stacks[i].push(stackStart[j][i])
  }
  stacks[i].reverse()
  var index = stacks[i].indexOf("[-]");
  if (index > -1) { 
    stacks[i].splice(index)
  }
}

console.log("\n/////STARTING STATE////\n")

for (var i = 0; i < stacks.length; i++) {
  console.log("stack " + (i + 1) + ": " + stacks[i])
}
//////////////

//  remove wording from procedure
for (var i = 0; i < procedure.length; i++) {
  procedure[i] = procedure[i].replace('move ', '')
  procedure[i] = procedure[i].replace(' from ', '')
  procedure[i] = procedure[i].replace(' to ', '')
  procedure[i] = procedure[i].split('')
  for (var j = 0; j < procedure[i].length; j++) {
    procedure[i][j] = parseInt(procedure[i][j])
  }
}

// MOVE //FROM //TO

// function to process movers
function movers(input) {
  var move = input[0]
  var from = input[1] - 1
  var to = input[2] - 1
  for (var i = 0; i < move; i++) {
    var mover = stacks[from].pop()
    stacks[to].push(mover)
  }
}

// loop through procedure and apply movers function
for (var i = 0; i < procedure.length; i++) {
  console.log(procedure[i])
  movers(procedure[i])
}


// loop through final state and take last items/letter
var finalCode = []
for (var i = 0; i < stacks.length; i++) {
  if (stacks[i].length > 0) {
    var stackLetter = stacks[i][stacks[i].length - 1]
    finalCode.push(stackLetter[1])
  }
}
finalCode = finalCode.join("")

// final state

console.log("\n/////FINAL STATE////\n")

for (var i = 0; i < stacks.length; i++) {
  console.log("stack " + (i + 1) + ": " + stacks[i])
}

console.log("\n/////FINAL CODE////\n")

console.log(finalCode + "\n")