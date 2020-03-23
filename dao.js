export class DAO {
    constructor() {}
  
    load() {
      let personArray = [];
      if (localStorage.getItem('data')) {
        let personString = localStorage.getItem('data');
        personArray = JSON.parse(personString);
      }
      return personArray;
    }
  
    save(personArray) {
      let personString = JSON.stringify(personArray);
      localStorage.setItem('data', personString);
    }
  }