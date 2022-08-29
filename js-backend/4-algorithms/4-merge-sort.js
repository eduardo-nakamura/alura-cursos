const { orderList } = require('./list')

function mergeSort(list) {
    if (list.length > 1) {
        const half = Math.floor(list.length / 2);
        const list1 = mergeSort(list.slice(0, half))
        const list2 = mergeSort(list.slice(half, list.length))
        list = orderFunc(list1, list2)
    }

    return list
}

function orderFunc(list1, list2) {

    let currentPosList1 = 0;
    let currentPosList2 = 0;
    let finalList = [];
    while (currentPosList1 < list1.length && currentPosList2 < list2.length) {
        let currentProdList1 = list1[currentPosList1]
        let currentProdList2 = list2[currentPosList2]

        if (currentProdList1.price < currentProdList2.price) {
            finalList.push(currentProdList1)
            currentPosList1++
        } else {
            finalList.push(currentProdList2)
            currentPosList2++
        }
    }

    return finalList.concat(currentPosList1 < list1.length ? list1.slice(currentPosList1) : list2.slice(currentPosList2))
}

console.log(mergeSort(orderList))