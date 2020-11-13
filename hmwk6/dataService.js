class DataService {

    constructor() {
        this.data = [];
    }

    async fetchData() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            if (! response.ok){
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            const data = await response.json();
            this.data = data.results;

            console.log(this.data);

        } catch (err) {
            console.log('Fetch Error :-S', err);
        }
    }


    //returns the first numRecords of the data array, or all if no parameter
    getData(numRecords) {
        console.log(this.data);

        if (numRecords === undefined) {
            return this.data;
        }
        else {
            return this.data.results.slice(0, numRecords);
        }
    }

};

