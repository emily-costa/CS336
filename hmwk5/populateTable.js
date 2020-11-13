addDataRows = () => {
    //instantiate the object
    const dataS = new DataService();
    //store an array of objects
    const temp = dataS.getData();

    //call function to create a row for each for each object in the array
    temp.forEach(createRow);
}

createRow = (rowData) =>{

    const table = document.getElementById('rows');
    //create new row
    const newRow = table.insertRow(0);
    //5 cells for each row
    const cell0 = newRow.insertCell(0);
    const cell1 = newRow.insertCell(1);
    const cell2 = newRow.insertCell(2);
    const cell3 = newRow.insertCell(3);
    const cell4 = newRow.insertCell(4);
    //put each element of the object into the cells
    cell0.innerHTML = rowData.name;
    cell1.innerHTML = rowData.gender;
    cell2.innerHTML = rowData.address;
    cell3.innerHTML = rowData.age;
    cell4.innerHTML = rowData.phoneNum;
}