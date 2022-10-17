// creare l'array per i numeri in progressione

// creo un ciclo per far prgogredire i numeri


const grid = document.querySelector(".grid")


let btn = document.getElementById("btn")
console.log(btn)
btn.addEventListener("click", function(){
    grid.innerHTML = "";
    for (let i = 1; i <= 100; i++){
        numbers = i
        console.log(numbers);
    
        // creo uno square per ogni numero
        let square = createSquare(numbers);
    
    
        // aggiungo un eventlistener
        square.addEventListener("click", function squareClick(){
            this.classList.add("blue")
            console.log(this)
        });
       
        // metto il risultato nell html
        grid.append(square)
    }
})

// aggiungo eventlistener 



// verificare l'arrasy


// funtions

// creare un nuovo div aggiungendo la classe square in base al numeroi


function createSquare(numbers){
    let newSquare = document.createElement("div");
    newSquare.classList.add("square")
    newSquare.innerHTML = numbers;
    return newSquare;
}
  

// aggiungere un div quando viene cliccato uno square



