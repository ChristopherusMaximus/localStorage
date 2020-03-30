import { Person } from "./person.js";

export class InputView {
    constructor(presenter) {
      this.presenter = presenter;
      this.app = document.getElementById('app');
    
    }
  
    render() {
      let html = `<h2>Neue Person hinzufügen</h2>
      <fieldset>
      <legend>Vorname:</legend>
      <input type="text" id="vorname"/>
      </fieldset>
      <fieldset>
      <legend>Nachname:</legend>
      <input type="text" id="nachname"/>
      </fieldset>
      <fieldset>
      <legend>Geburtsdatum:</legend>
      <input type="date" id="geburtsdatum"/>
      </fieldset>
      <fieldset>
      <legend>Corona-Infiziert:</legend>
      <input type="checkbox" id="corona"/>
      </fieldset>
      <fieldset class='nodisplay' id="symptome">
      <legend>Symptome:</legend>
      <input type="text" id="symptome"/>
      </fieldset>
      <button id="safe">Speichern</button>
      <button id="cancel">Abbrechen</button>`;      
      this.app.innerHTML = html;
      this._addEventListener();
    }

    _addEventListener(){
        const safe = document.getElementById("safe");
        safe.addEventListener("click", () => {
            this.presenter.buttonSafeClicked();
        });

        const cancel = document.getElementById("cancel");
        cancel.addEventListener("click", () => {
            this.presenter.buttonCancelClicked();
        });

        const corona = document.getElementById('corona');
        corona.addEventListener("click", () =>{
            this.symptomAuswahl();
        } )

    }

    getPerson(){
        const vorname = document.getElementById('vorname').value;
        const nachname = document.getElementById('nachname').value;
        const geburtsdatum = document.getElementById('geburtsdatum').value;
        const corona = document.getElementById('corona').checked;
        const symptome = document.getElementById('symptome').value;

        let person = new Person();
        person.vorname = vorname;
        person.nachname = nachname;
        person.geburtsdatum = geburtsdatum;
        person.corona = corona;
        person.symptome = symptome;

        return person;

    }

    symptomAuswahl(){
      if(document.getElementById('corona').checked){
        document.getElementById('symptome').className = "display";
      }
      else{
        document.getElementById('symptome').className = "nodisplay";
      }
    }
  }
  