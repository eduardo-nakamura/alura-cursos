const collector = {
    name: "John",
    age: 41,
    typeCollection: ["Comics"],
    email: "john@collect.com",
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
}

console.log(collector.name, collector["name"])
console.log(collector["name"])

for(i = 0; i < 4; i++) {
    collector.adicionarTipo("typeCollection","HQ"+i)
}
console.log(collector.typeCollection)