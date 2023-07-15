// Write your solution here!
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
    const copyCat = [...cats, name]
    return copyCat
}

function prependCat(name) {
    const copyCat = [name, ...cats]
    return copyCat
}

function removeLastCat() {
    const copyCat = cats.slice(0, -1)
    return copyCat
}

function removeFirstCat() {
    const copyCat = cats.slice(1)
    return copyCat
}
