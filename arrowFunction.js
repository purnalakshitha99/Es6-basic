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

const newGames = games.find(newGames => newGames.name === 'cricket'); //adala values dei
const newGamesIndex = games.findIndex(newGamesIndex => newGamesIndex.name === 'cricket')//circket eka thiyena index eka dei
const filternewGames = games.filter(newGames => newGames.name ); 


console.log(newGames);
console.log(newGamesIndex)
console.log(filternewGames)

