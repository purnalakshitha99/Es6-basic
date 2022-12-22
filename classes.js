class Person {
    constructor(firstName,lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }
    
    introduce(){
        console.log(`my name is ${this.firstName} ${this.lastName}`)
    }
}

const full = new Person('purna','lakshitha');
console.log(full)

full.introduce();



class Employee extends Person{
    constructor(firstName,lastName,position,salary){
        super(firstName,lastName)
        this.position = position;
        this.salary = salary;
    }

    introduce(){
        super.introduce();
        console.log(`Position is: ${this.position}`);
        console.log(`Salary is: ${this.salary}`);
        
    }
}

const emp = new Employee('Rashmi','Darshika','clack',100000);
emp.introduce();