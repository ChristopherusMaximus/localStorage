import { ListView } from './listview.js';
import { InputView } from './inputview.js';
import { Model } from './model.js';

export class Presenter {
  constructor() {
    this.model = new Model();
    this.showListView();
  }

  buttonNewClicked() {
    this.view = new InputView(this);
    this.view.render();
  }

  buttonSafeClicked() {
    let person = this.view.getPerson();
    this.model.createPerson(person);
    this.showListView();
  }

  buttonCancelClicked() {
    this.showListView();
  }

  buttonDeleteClicked(index) {
    this.model.deletePerson(index);
    this.showListView();
  }

  showListView(){
    
    this.view = new ListView(this);
    let personen = this.model.readAllPersons();
    this.view.render(personen);
  }

}
