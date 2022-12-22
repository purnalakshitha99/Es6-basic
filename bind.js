const person = {
    name : 'mosh',
    walk(){
        console.log(this)
    }
};


person.walk();

const walk = person.walk.bind(person)

walk();

//
const person1 ={
    name:'purna',
    lastname:'lakshitha',
    fullname(){
        console.log('my name is',this.name,this.lastname);
        (() => {
            console.log('first name:',this.name)
        })()
    }
}

person1.fullname();