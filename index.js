// Add your functions here
function map(sourceArray, callback){
    let newArray = []
    sourceArray.forEach(element => newArray.push(callback(element)))
    return newArray
}

function reduce(sourceArray, callback, startValue){
    let total 
    if (startValue) {
        total = startValue
    } else if (callback(startValue) === false) {
        total = true 
    } else {
        total = 0
    }
    sourceArray.forEach(element => total = callback(element, total ))
    return total
}