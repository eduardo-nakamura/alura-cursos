const { publisherLeaf, publisherBranch } = require('./list')

function concatList(list1,list2) {
    let finalList = [];
    let currentPosList1 = 0;
    let currentPosList2 = 0;
    let currentPosFinal = 0
    while (currentPosList1 < list1.length && currentPosList2 < list2.length) {
        let currentProdList1 = list1[currentPosList1]
        let currentProdList2 = list2[currentPosList2]

        if (currentProdList1.price < currentProdList2.price) {
            finalList[currentPosFinal] = currentProdList1
            currentPosList1++
        } else {
            finalList[currentPosFinal] = currentProdList2
            currentPosList2++
        }
        currentPosFinal++
    }

    while (currentPosList1 < list1.length){
        finalList[currentPosFinal] = list1[currentProdList1]
        currentPosList1++
        currentPosFinal++
    }

    while (currentPosList2 < list2.length){
        finalList[currentPosFinal] = list2[currentProdList2]
        currentPosList2++
        currentPosFinal++
    }

    return finalList
}

console.table(concatList(publisherLeaf, publisherBranch ))