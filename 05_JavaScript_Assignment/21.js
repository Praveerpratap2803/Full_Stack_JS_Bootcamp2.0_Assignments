let countries = ["India","Afghanistan","Albania","Algeria","Andorra","USA"]
let array = countries.filter(function(element){
    //console.log(element);
    return element==="Ethiopia";
})
if(array[0]===undefined){
    countries.push("Ethiopia")
}
console.log(countries);




