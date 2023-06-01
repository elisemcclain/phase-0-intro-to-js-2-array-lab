const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(name) {
    var catsCopy = cats.slice()
    catsCopy.push(name)
    return catsCopy
}
function prependCat(name) {
    var catsCopy = cats.slice()
    catsCopy.unshift(name)
    return catsCopy
}
function removeLastCat(name) {
    var catsCopy = cats.slice()
    catsCopy.pop()
    return catsCopy
}
function removeFirstCat(name) {
    var catsCopy = cats.slice()
    catsCopy.shift()
    return catsCopy
}