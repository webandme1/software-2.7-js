import personName, {pet, greet} from "./name.js";
//All non-default exports needs to be destructured from the file.

//importing from package
import _ from "lodash";


console.log(personName);
console.log(pet.name, pet.breed);
greet("Monika");

//using _ from lodash
const nums = _.range(1, 9);
console.log(nums);