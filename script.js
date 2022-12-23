import Car,{ author as owner,sayHi } from "./modules.js";  //mekata thama watema thiyena ewa import kara ganne //import ekedi nam mokak hari name change ekak kroth eka module eke karann one na //mokada module eken apu eka e widihata ma gattane
//meke me Car kiyala thiyenne default apu ekak ewa danne {}eliyen  on nam eke namath change karann puluwan onnm Vehicle kiyala dammama (Car as Vehicle) kiyala dann one na ethakota yana instance eketh Vehicle kiyala danna one (const newCar = new Vehicle('honda',1999))
console.log(owner);
sayHi();//methana me sayHi kiyana eka module ekedi ma maru karapu ekak e nisa e namama script eke da damiya yuthui



const newCar = new Car('Honda',1999)
console.log(newCar.brand);
console.log(newCar.Year);