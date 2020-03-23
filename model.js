import { DAO } from './dao.js';
import { Person } from './person.js'

export class Model {
  constructor() {
    this.dao = new DAO();
    this.personArray = this.dao.load();
  }

  //    Create
  addPerson(person){
      this.personArray.push(person);
      this.dao.save(this.personArray);
  }

  //    Read 
  getData() {
      return this.personArray;
  }

  //    Update

  //    Delete

}