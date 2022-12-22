const number = 10;

const square = function(number){
    return number*number

}

const square2 = number => number * number;

console.log(square(5));
console.log(square2(10));


const games =[
    { name : 'cricket',players:10},
    { name : 'vallyBall',players:6}
]

const newGames = games.findIndex(newGames => newGames.name === 'cricket');

console.log(newGames);
