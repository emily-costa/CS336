class DataService {
    //array of objects
    data = [
    //data entry 1
        {
        name: 'Emily',
        gender: 'F',
        address: '329 Timmer Hall',
        age: 20,
        phoneNum: '412-403-4445',
    },
    //data entry 2
    {
        name: 'Brit',
        gender: 'F',
        address: '231 Haynes Hall',
        age: 18,
        phoneNum: '407-675-8876',
    },
    //data entry 3
    {
        name: 'Bob',
        gender: 'M',
        address: '261 Bolt Hall',
        age: 23,
        phoneNum: '616-765-9846',
    },
    ];

    //constructor does nothing
    constructor(){}
    //returns the first numRecords of the data array, or all if no parameter
    getData(numRecords) {
        if (numRecords === undefined) {
            return this.data;
        }
        else {
            return this.data.slice(0, (numRecords));
        }
    }

};

//test code
/*
const data1 = new DataService();
console.log("getData parameteris 2");
console.log(data1.getData(2));
console.log("getData parameteris 3");
console.log(data1.getData(3));
console.log("getData parameteris undefined");
console.log(data1.getData(undefined));
*/
