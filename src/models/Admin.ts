import { FitnessClass } from "./FitnessClass";
import { User} from "./User";
import { Tier } from "./enums";
export class Admin extends User{

    constructor(id: string, name: string, email: string, password: string) {
        super(id, name, email, password, Tier.Platinum);
      }

      createClass(classObj: FitnessClass) {
        console.log(`Admin created: ${classObj.name}`);
      }
    
      cancelClass(classObj: FitnessClass) {
        classObj.isCancelled = true;
        console.log(`Admin cancelled: ${classObj.name}`);
      }
}