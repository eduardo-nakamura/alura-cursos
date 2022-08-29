const bookList = require('./list');

function insertionSort(arrProd) {

    for (let curr = 0; curr < arrProd.length; curr++) {
        let compare = curr;
        while (compare > 0 && arrProd[compare].price < arrProd[compare - 1].price) {
            let itemCompared = arrProd[compare]
            let itemPrev = arrProd[compare - 1]
            
            arrProd[compare] = itemPrev
            arrProd[compare - 1] = itemCompared

            compare--
        }
    }
    console.log(arrProd)
}


insertionSort(bookList)
module.exports = insertionSort;