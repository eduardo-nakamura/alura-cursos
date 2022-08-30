const { orderList } = require('./list')
orderList.sort((a, b) => a.price - b.price )

function search(array, from, to, priceRange){    
    const mid = Math.floor(( from + to ) / 2)
    const current = array[mid]
    if (from > to) {
        return -1
    }
    if(priceRange === current.price) {
        return mid
    }
    if(priceRange < current.price) {
        return search(array, from, mid - 1, priceRange)
    }
    if(priceRange > current.price) {
        return search(array, mid + 1, to, priceRange)
    }

}

console.log(search(orderList, 0, orderList.length - 1, 40))
console.log(search(orderList, 0, orderList.length - 1, 34))