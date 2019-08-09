export const model = new Model();
class Model {
    constructor() {
        this.id=0;
        this.arrayOfPerson = [];
    }

    addPersonToArray(obj){
        this.arrayOfPerson[this.arrayOfPerson.length]=obj;
    };

    getArrayOfPerson(){
        return this.arrayOfPerson;
    };

    setArrayOfPerson (array){
        this.arrayOfPerson = array;
    };

    getNextId (){
        this.id++;
        return this.id;
    };
}

