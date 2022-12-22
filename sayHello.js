//var -> funciton
//let -> block eke witharai
//const -> block


const x = 10;
x =2;



function sayHello(){
    for(let i = 0 ; i<5 ; i++){  //uda let eke wenuwat "var " dammoth adala wenne adala block eka athule witharai
        console.log(i);
    }
  //console.log(i)
   
}

sayHello();


function sayHi(){
    for(var j = 0 ; j<5 ; j++){  // let eke wenuwat "var " dammoth adala wenne adala block eka athule witharai
        console.log(j);
    }
    console.log(j)//methanadi 5 th output eka lesa gani 12345 e var use kaarapu nisa

   
}

sayHi();