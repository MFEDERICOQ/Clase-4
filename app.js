//saludo presentación
const person = prompt("Hola, ¿cuál es su nombre?");
let myName = document.getElementById("myName");
myName.innerHTML = person;


//botón manipulado

class Button {
    constructor(parentID, text) {
          this.parentID = parentID;
          this.text = text;
    }
    render() {
        let myName = document.getElementById(this.parentID);
        myName.innerHTML = "<button></button>";
        let myTexto = this.text;

    }
}

let myButton = new Button();
myButton.render(myName, 12);


