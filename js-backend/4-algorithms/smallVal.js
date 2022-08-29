function smallValue(arrProd, initPos) {
  let smaller = initPos;
  
  for (let atual = initPos; atual < arrProd.length; atual++) {
    if (arrProd[atual].price < arrProd[smaller].price) {
      smaller = atual
    }
  }
  return smaller;
}

module.exports = smallValue;