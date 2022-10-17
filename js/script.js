// creare l'array per i numeri in progressione

// creo un ciclo per far prgogredire i numeri


let numbers = [];


const grid = document.querySelector(".grid")

for (let i = 0; i <= 100; i++){
    numbers = i
    console.log(numbers);

    // creo uno square per ogni numero
    let square = createSquare(numbers);

    // metto il risultato nell html
    grid.append(numbers)
}
// verificare l'arrasy


// funtions

// creare un nuovo div aggiungendo la classe square in base al numeroi


function createSquare(numbers){
    let newSquare = document.createElement("div");
    newSquare.classList.add("square")
    newSquare.innerHTML = numbers;
    return newSquare;
}
  

