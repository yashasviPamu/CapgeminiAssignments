const a=5;
try{
    a=10;
}
catch(err){
    console.log(err.message);
}
console.log(a);
