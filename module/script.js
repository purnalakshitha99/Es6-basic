//   default ->      import ..... from '';

// norml object or variable or others       ->       import { } from '';



import  Person from "./module.js";//methana default ekak nisa person nikanma damai

export class Teacher extends Person{
    constructor(name){
        super(name);
    }

    teach(){
        console.log('teach teacher');
    }

}

const T1 = new Person('Samanali');
T1.walk();
console.log(T1.name);

