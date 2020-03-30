export class DAO {
    constructor() {}
  
    readPersons() {
      let dataArray = [];
      if (!localStorage.getItem('personen')) {
        let dataString = localStorage.getItem('personen');
        console.log(dataString);
        dataArray = JSON.parse(dataString);
      }
      return dataArray;
    }
  
    safePerson(dataArray) {
      let dataString = JSON.stringify(dataArray);
      localStorage.setItem('personen', dataString);
    }
  }