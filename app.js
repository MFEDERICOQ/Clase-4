//Pedido de datos para botones
const person = prompt("Hola, ¿cuál es su nombre?");
const edad = prompt("¿Cuál es tu edad?")


//Creación de botón, que llevará el nombre capturado por el prompt

class Button {
    constructor(parentID, text) {
          this.parentID = parentID;
          this.text = text;
    }
    render() {
        let myName = document.getElementById(this.parentID);
        const myButtonHTML = myName.innerHTML + "<button>" + this.text + "</button>";
        myName.innerHTML = myButtonHTML;

    }
}

let myButton = new Button("myName", person);
myButton.render();
let myButton2 = new Button("myName", edad);
myButton2.render();

/*Creación del input que llevará los nombres capturados por el prompt
como placeholder*/

class Input {
    constructor(parentID, text) {
          this.parentID = parentID;
          this.text = text;
    }
    render() {
        let myName = document.getElementById(this.parentID);
        const InputHTML = myName.innerHTML + "<input type='text' placeholder=" + this.text + " readonly>" + "<br>";
        myName.innerHTML = InputHTML;

    }
}

let myInput = new Input("myInputs", person);
myInput.render();
let myInput2 = new Input("myInputs", edad);
myInput2.render();
