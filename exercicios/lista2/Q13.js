let array = ["Opa", "Felipe", 1, 2]

const somenteNumbers = array => {
    return array.filter(item => typeof item === "number")

}

console.log(somenteNumbers(array))