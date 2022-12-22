const workingDays = ['monday','tuesday','wednesday','thursday','friday'];
const restDays = ['saturday','sunday'];

const daysOfWeek = [...workingDays,'he eh',...restDays,'ha ha'];

console.log(daysOfWeek);


//=============
function add(num1,num2){
    console.log('sum',num1+num2);
}

numbers = [2,4];

//add(numbers[0],numbers[1]);

add(...numbers)//ara uda eken karapu ekama thama //numbers kiyana array eke value deka spread eka haraha function ekata pass karanwa//add kiyana function ekata num1 ekata saha num2 walta numbers array eka value deka piliwelin dagannawaa
  


//join object

const car = {
    model:'Honda',
    name:'civic',
    year:2014
}


const modification ={
    headLight:'LED',
    seats:'Leather seats'
}
 
modifiedCar = {...car,...modification};

console.log(modifiedCar);