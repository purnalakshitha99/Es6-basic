const person = {
    name : 'mosh',
    walk(){
        console.log(this)
    }
};


person.walk();

const walk = person.walk.bind(person)

walk();

