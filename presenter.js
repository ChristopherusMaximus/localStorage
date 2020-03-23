import { View } from './view.js';
import { Model } from './model.js';


export class Presenter {

    constructor() {
        this.model = new Model();
        const personData = this.model.getPersonData();
    
        this.view = new View(this);
        this.view.render(personData);
      }


}