// {"id":7}
// {"firstName":"Vasya","lastName":"Vasin","age":12}

export const logic = new Logic();

class Logic {
    constructor() {
        this.id = 0;
        this.arrayOfPerson = [];
    }

    addPersonToArray(obj) {
        this.arrayOfPerson[this.arrayOfPerson.length] = obj;
    };

    objToJson(obj) {
        return JSON.stringify(obj);
    };

    checkObjectForCreate(obj) {
        if (obj.firstName !== undefined && obj.lastName !== undefined && obj.age !== undefined) {
            return true;
        }
        return false;
    };

    checkObjectForDelete(obj) {
        if (obj.id >= 0) {
            return true;
        }
        return false;
    };

    stringToJSON(string) {
        return JSON.parse(string);
    };

    objectToString(obj) {
        return JSON.stringify(obj);
    };

    addIdToObject(num, obj) {
        let objectWithId = {
            id: num,
            firstName: obj.firstName,
            lastName: obj.lastName,
            age: obj.age
        }
        return objectWithId;
    };

    deleteFromArray(index, array) {
        array.splice(index, 1);
        console.log("array.splice   " + array);
        return array;
    };

    getIndexFromobject(object) {
        return object.id;
    };

    getIndexOfObjectByID(id, array) {
        for (let i = 0; i < array.length; i++) {
            let obj = array[i];
            if (obj.id === id) {
                return i;
            }
        }
        return;
    };

    getSubjectForUpdate(object) {
        if (object.id >= 0) {
            if (object.firstName !== undefined) {
                return 'firstName';
            }
            if (object.lastName !== undefined) {
                return 'lastName';
            }
            if (object.age !== undefined) {
                return 'age';
            }
            return false;
        }

        return false;
    };

    updateFirstNameInObj(object, newName) {
        let objNewPerson = {
            id: object.id,
            firstName: newName,
            lastName: object.lastName,
            age: object.age
        };
        return objNewPerson;
    };

    changeObjInArray(array, object, index) {
        array[index] = object;
        return array;
    };

    updateLastNameInObj(object, newLastName) {
        let objNewPerson = {
            id: object.id,
            firstName: object.firstName,
            lastName: newLastName,
            age: object.age
        };
        return objNewPerson;
    };

    updateAgeInObj(object, newAge) {
        let objNewPerson = {
            id: object.id,
            firstName: object.firstName,
            lastName: object.lastName,
            age: newAge
        };
        return objNewPerson;
    };

    addStartPersonToArray(array, object) {
        let newArray = [];
        newArray[0] = object;
        for (let i = 0; i < array.length; i++) {
            newArray[i + 1] = array[i];
        }
        return newArray;
    };

    addMiddlePersonToArray(array, object) {
        let newArray = [];
        let middle = Math.round((array.length) / 2);
        newArray[middle] = object;
        for (let i = 0; i < middle; i++) {
            newArray[i] = array[i];
        }
        for (let i = middle; i < array.length; i++) {
            newArray[i + 1] = array[i];
        }
        return newArray;
    };
};

