 const person = {
    name:'mosh',
    walk(){
        console.log('hi')
    },
    talk(){}
 };


//console.log(person.talk());
person.walk();



person.name = '';

//const targetMember = 'name';
person['name'] = 'john';
console.log(person.name)