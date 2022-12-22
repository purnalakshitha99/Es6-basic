//=============object

const address = {
    street:'dambulla',
    city:'anuradhapura',
    country:'srilanka'
};

const { street  }= address//mehema ekk damme nattn ekin eka (address.city)   (address.street)  (address.country)  adi lesa yoda print kara ganimata siduwe //you need other city and country you can add this bracket//city and country print kara gann awasya nam me bracket ekatama add krann e dekath {street,city,country}adi lesa
//const {street,...other} = address       //mehema others kiyala dunnama address object eke methana nam karala nathi anith ewath adala kara gannawaa

//console.log(other);//other eka uda eke dala thiyana nisa methanin kelinma city ekai country ekai values samaga print kara gann puluwan

//==============array

const daysOfWeek = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

let [ mekadaganin,aaamekath,...other] = daysOfWeek  //onenam meken ena output eka variable ekakata dagena ekama print karannath puluwan

console.log(mekadaganin,aaamekath,other);
console.log(mekadaganin);




//==============clone 

const clone = [...daysOfWeek];

console.log(daysOfWeek);
console.log('clone array ')
console.log(clone);

//==============clone object
const cloneObject = {...address};
console.log(cloneObject)





