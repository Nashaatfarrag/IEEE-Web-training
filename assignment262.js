let x =  function(){
    console.log("I am called from inside a function ")
}
let y = function(callback){
    console.log("Do something")
    callback();
}
y(x);


//Making my own filter method
function myfilter(mylist,myConditionFun){
    let final = []

    for(let n of mylist){
        console.log(n);
        if(myConditionFun(n)){
            final.push(n);
        }
    }
    return final ;
}
//testing my own filter method
hi = [4,5,6,2,3,88,9,66,3,20,1,4,5,68,62,34,74,56,32,14]
m = myfilter(hi,v => v%2 == 0);
console.log(m);




numberArray= [7, 2, 4, 5, 9, 20, 1];
z = numberArray.filter(value=> value >= 25 )
console.log(z);
add5 = numberArray.map(value => value + 5 )
console.log(add5);
sum = numberArray.reduce((a,b)=> (a+b));
console.log(sum);
console.log(numberArray.find(value => value > 10))
console.log(numberArray.findIndex(value => value > 10))
numberArray.splice(numberArray.findIndex(value => value == 9),1 )
console.log(numberArray)

