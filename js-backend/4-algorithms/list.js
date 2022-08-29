const bookList = [
    {name:'JS', price:25.0},
    {name:'PHP', price:15.0},
    {name:'Java', price:30.0},
    {name:'Elixir', price:50.0},
    {name:'Go', price:45.0},
    {name:'Python', price:20.0},
]

const publisherLeaf = [
    {title:"Php", price:15},
    {title:"JS", price:25},
    {title:"Java", price:30},
    {title:"Go", price:45},
    {title:"Elixir", price:50},
]

const publisherBranch = [
    {title:"Python", price:20},
    {title:"Rust", price:22},
    {title:"Ruby", price:28},
    {title:"C#", price:33},
    {title:"C++", price:35},
    {title:"Scala", price:40},
]

const orderList = [
    {title:"Go", price:45},
    {title:"C++", price:35},
    {title:"Java", price:30},
    {title:"Php", price:15},
    {title:"Elixir", price:50},
    {title:"Rust", price:22},
    {title:"JS", price:25},   
    {title:"Python", price:20},    
    {title:"Ruby", price:28},
    {title:"C#", price:33},    
    {title:"Scala", price:40},
]

function orderFunc(list, from, to) {
    const elem1 = list[from]
    const elem2 = list[to]

    list[to] = elem1
    list[from] = elem2
}

module.exports = { bookList, publisherLeaf, publisherBranch, orderList, orderFunc }