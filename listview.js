export class ListView {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
  }

  render(personen) {       
    let html =`
    <h2>Liste aller Personen</h2>
    <ul>`;
    let index = 0;
    let person;
    personen.forEach(person => {
        let vorname = person.vorname;
        let nachname = person.nachname;
        let geburtsdatum = person.geburtsdatum;
        let corona = "nein";
        let symptome = "";
        if(person.corona == true){
           corona = "ja";
           symptome = `Symptome: ${person.symptome}`
        }
      html += `<li>Vorname: ${vorname} 
      Nachname: ${nachname} 
      Geburtsdatum: ${geburtsdatum} 
      Corona-Infiziert: ${corona} `;
      html += symptome;
      html +=`<button class='delete' id="${index}">X</button></li>`;
      index++;
    });   
    html += '</ul>';
    html += '<button id="neu">Neue Person hinzufügen</button>';
    this.app.innerHTML = html;

    const button = document.getElementById('neu');
    button.addEventListener("click", () =>{
      this.presenter.buttonNewClicked();
    });

    const deleteButtons = document.getElementsByClassName('delete');
    let deleteButtonsLength = deleteButtons.length;

    for(let i = 0; i< deleteButtonsLength;i++){
        deleteButtons[i].addEventListener("click", () =>{
          this.presenter.buttonDeleteClicked(deleteButtons[i].id);
        });
      }     

    }
}
