class Person{
    constructor(name){
        this.name = name;

    }

    walk(){
        console.log('walk');
    }
}

class Teacher extends Person{
    constructor(name,subject){
        super(name)
            this.subject = subject
        }
        walk(){
            super.walk();
            console.log('English is subject')
        }

    }

    const t1 = new Teacher('sanduni','english');
    t1.walk();