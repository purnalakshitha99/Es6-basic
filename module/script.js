import  Person from "./module.js";//methana default ekak nisa person nikanma damai

export class Teacher extends Person{
    constructor(name){
        super(name);
    }

}

const T1 = new Teacher('Samanali');
T1.walk();
console.log(T1.name);

