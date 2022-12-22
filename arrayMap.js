//map method use karanne array ekak use karala e array eka modify karala thwa array ekak handanna



const numbers = [100,300,210,322,600];


// numbers.map((value,index)=>{
//     console.log(value,index)
// })



const newMap=numbers.map(value=>(value*1.25).toFixed()
)

console.log(numbers)
console.log(newMap);

const newMap2 = numbers.map(function(n){
    return (n*1.25).toFixed();
})
console.log('newmap 2')
console.log(newMap2)