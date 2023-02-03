let dateObj = new Date()
console.log(dateObj.getFullYear());
console.log(dateObj.getMonth());
console.log(dateObj.getDate());
console.log(dateObj.getDay());
console.log(dateObj.getHours());
console.log(dateObj.getMinutes());
let date = new Date(1970,0,1,0,0,0,0)
let sec1 = date.getSeconds()
let sec2 = dateObj.getSeconds()
console.log(parseInt((dateObj-date)/1000));
// console.log(dateObj.setDate(24));




