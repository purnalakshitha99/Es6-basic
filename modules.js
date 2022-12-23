
//meke thama script ekata ywanna one ewa hadanne //export
 const author = 'Purna';

 function intro(){
    console.log("hello i'm purna lakshitha");
}

export default class Car{       //eka java script file ekakata eka default ekai danne
    constructor(brand,Year){
        this.brand = brand;
        this.Year = Year;
    }
}



//export default Car;    //uda class eke export eka onnam ethana danne nathuwa mehtan dann puluwan
export{author,intro as sayHi} //methana me intro eke nama maru karoth anith hama thanama eka danna one export karata psse import karana than walada

