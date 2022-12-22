const person ={
    talk(){
        var self = this;
        setTimeout(()=>{
            console.log("this",this)
        },1000);
    }
}

person.talk();


//annonymous function
const p = setTimeout(()=>{
    console.log('hellow')
},2000)

console.log(p)