const { orderList } = require('./list')

function findMin(pivot, list) {
    let less = 0
    for (let i = 0; i < list.length; i++) {
        let prodCurrent = list[i]
        if(prodCurrent.price < pivot.price){
            less++
        }
    }
    orderFunc(list, list.indexOf(pivot), less)
    return list
}


function orderFunc(list, from, to) {
    const elem1 = list[from]
    const elem2 = list[to]

    list[to] = elem1
    list[from] = elem2
}

function pivotDiv(list){
    let pivot = list[Math.floor(list.length / 2)]
    findMin(pivot, list);

    let less = 0
    for (let i = 0; i < list.length; i++) {
        let current = list[i]
        if(current.price <= pivot.price && current !== pivot){
            orderFunc(list, i, less) 
            less++
        } 
    }
    return list;
}
console.log(pivotDiv(orderList))
module.exports = orderFunc;
