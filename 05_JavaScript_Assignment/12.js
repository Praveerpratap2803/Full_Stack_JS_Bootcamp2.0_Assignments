let dateF = new Date()
//console.log(`${dateF.getFullYear()}-${dateF.getMonth()}-${dateF.getDate()} ${dateF.getHours()}:${dateF.getMinutes()}`)



function dateFormat1(dateF){
    return `${dateF.getFullYear()}-${dateF.getMonth()}-${dateF.getDate()} ${dateF.getHours()}:${dateF.getMinutes()}`
}
function dateFormat2(dateF){
    return `${dateF.getDate()}-${dateF.getMonth()}-${dateF.getFullYear()} ${dateF.getHours()}:${dateF.getMinutes()}`
}
function dateFormat3(dateF){
    return `${dateF.getDate()}/${dateF.getMonth()}/${dateF.getFullYear()} ${dateF.getHours()}:${dateF.getMinutes()}`
}

console.log(dateFormat1(new Date()))
console.log(dateFormat2(new Date()))
console.log(dateFormat3(new Date()))

