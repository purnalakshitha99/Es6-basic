//var -> funciton
//let -> block eke witharai  {}
//const -> block


// const x = 10;
// x =2;



function sayHello(){
    for(let i = 0 ; i<5 ; i++){ 
        console.log(i);
    }
  console.log(i)//methanadi i is not defined lesa labe mokada 'let '  kiyana eka adala wenne block eka athule witharai methandi me i wa dakinne aluthma kenenk lesai
   
}

sayHello();


function sayHi(){
    for(var j = 0 ; j<5 ; j++){  //methana me declaration karapu eka 'var' nisa block eken eliyatath j wala age continue wei
        console.log(j);
    }
    console.log(j)//methanadi 5 th output eka lesa gani 12345 e var use kaarapu nisa

   
}

sayHi();