const person = {
    name:'mosh',
    walk(){
        console.log((this))
    }
}


const walk = person.walk();
console.log(walk)
//person.walk();