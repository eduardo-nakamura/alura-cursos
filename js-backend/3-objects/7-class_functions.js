const book = {
    name: "Bullet Train",
    publisher: "Intrinseca",
    pages: 464,
    recommend: function () {
        console.log(`You May Also Like ${this.name}`)
    }
}
book.recommend()

const BookFunction = function (name, publisher, pages) {
    gName = name,
        gPublisher = publisher,
        gPages = pages

    this.getName = function () {
        return gName
    }
    this.getPublisher = function () {
        return gPublisher
    }
    this.getPages = function () {
        return gPages
    }
}

const BulletTrain = new BookFunction("Bullet Train", "Intrinseca", 464)

console.log(BulletTrain.getName())
console.log(BulletTrain.getPublisher())
console.log(BulletTrain.getPages())

// class
class BookClass {
    constructor(name, publisher, pages) {
        this.name = name
        this.publisher = publisher
        this.pages = pages
    }
    getTitle() {
        console.log(`Title: ${this.name}`)
    }
    getDescription() {
        console.log(`${this.name} is a book from publisher ${this.publisher} and contains ${this.pages} pages.`)
    }
}

const hamnet = new BookClass("Hamnet", "Knopf Doubleday Publishing Group", 320)
console.table(hamnet)
hamnet.getTitle()
hamnet.getDescription()

console.table(typeof BookClass)

class BookCollection extends BookClass {
    constructor(name, nameCollection) {
        super(name)
        this.nameCollection = nameCollection
    }

    getDescriptionCollection() {
        console.log(`The Book ${this.name} is part of the ${this.nameCollection} Collection`)
    }
}

const ManualEscoteiroVol1 = new BookCollection("Manual do Escoteiro Mirim Vol.1","Manual do Escoteiro Mirim")
ManualEscoteiroVol1.getDescriptionCollection()