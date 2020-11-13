// Generated by https://quicktype.io
export interface Person {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Dob;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
   }

export interface Dob {
    date: string;
    age: number;
   }

export interface ID {
    name: string;
    value: string;
   }

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
   }

export interface Coordinates {
    latitude: string;
    longitude: string;
   }

export interface Street {
    number: number;
    name: string;
   }

export interface Timezone {
    offset: string;
    description: string;
   }

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
   }

export interface Name {
    title: string;
    first: string;
    last: string;
   }

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
   }

export class DataService {

    data:any[];

    constructor() {
        this.data = [];
    }

    async fetchData() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            if (! response.ok){
                console.log('Looks like there was a problem. Status Code: ' + response.status);

            }

            const data = await response.json();
            this.data = data.results;

        } catch (err) {
            console.log('Fetch Error :-S', err);

        }
    }


    //returns the first numRecords of the data array, or all if no parameter
    getData(numRecords ?) {
        console.log(this.data);

        if (numRecords === undefined) {
            return this.data;
        }
        else {
            return this.data.slice(0, numRecords);
        }
    }

};
