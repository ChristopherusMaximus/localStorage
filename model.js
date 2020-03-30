import { Person } from './person.js';
import { DAO } from './dao.js';

export class Model {
  constructor() {
    this.dao = new DAO();
    this.personen = this.dao.readPersons();
  }

  //      Create
  createPerson(person) {
    this.personen.push(person);
    this.dao.safePerson(this.person);
  }

  //      Read  
  readAllPersons() {
    return this.personen;
  }

  //      Update

  //      Delete
  deletePerson(index){
    this.personen.splice(index,1);
    this.dao.safePerson(this.personen);
  }

  
}
