const { orderList } = require('./list')
const orderFunc = require('./5-quick-sort')

function quickSort(array, left, right) {
    if (array.length > 1) {
        let currentIndex = partition(array, left, right)
        if (left < currentIndex - 1) {
            quickSort(array, left, currentIndex - 1)
        }
        if (currentIndex < right) {
            quickSort(array, currentIndex, right)
        }
    }
    return array
}

function partition(array, left, right) {
    let pivo = array[Math.floor((left + right) / 2)]
    let currentLeft = left; //0
    let currentRight = right; //10

    while (currentLeft <= currentRight) {
        while (array[currentLeft].price < pivo.price) {
            currentLeft++
        }

        while (array[currentRight].price > pivo.price) {
            currentRight--
        }

        if (currentLeft <= currentRight) {
            orderFunc(array, currentLeft, currentRight);
            currentLeft++;
            currentRight--;
        }
    }
    return currentLeft;

}

console.log(quickSort(orderList, 0, orderList.length - 1))
