// Variables declared with var are in the function scope.
var height = 5;
var width = 7;

var totalArea = height * width;
console.log(totalArea) // 35
// Variables declared as let are in the block scope.
let shape = 'triangle'
let heightLet = 5;
let widthLet = 7;

let totalAreaLet;
if(shape !== 'rectangle'){
    totalAreaLet = (heightLet * widthLet) / 2;    
} else {
    totalAreaLet = heightLet * widthLet;
}
console.log(totalAreaLet)

// Variables declared as const are in the block scope.
const shapeConst = 'triangle';
const heightConst = 5;
const widthConst = 7;
let totalAreaConst;
// const totalAreaConst; Missing initializer in const declaration
if(shapeConst === 'square'){
    totalAreaConst = heightConst * widthConst
} else {
    totalAreaConst = (heightConst * widthConst) / 2
}

console.log(totalAreaConst)