//truthy value
if(5||false){
    console.log(true);
}else{
    console.log(false);
}
if(!(false||NaN)){
    console.log(true);
}else{
    console.log(false);
}
if(3|6){
    console.log(true);
}else{
    console.log(false);
}



//falsy value
if(false){
    console.log(true);
}else{
    console.log(false);
}
if(NaN){
    console.log(true);
}else{
    console.log(false);
}
if(undefined){
    console.log(true);
}else{
    console.log(false);
}
if(null){
    console.log(true);
}else{
    console.log(false);
}
if(0){
    console.log(true);
}else{
    console.log(false);
}
if(""){
    console.log(true);
}else{
    console.log(false);
}
if(undefined&& 1){
    console.log(true);
}else{
    console.log(false);
}







