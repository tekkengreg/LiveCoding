function getPizza(commande, dring) {
    console.log("je rentre ici")
    setTimeout(() => dring(commande), 2000);
}

console.log("hey garcon je suis B")
getPizza("pizza chorizo", 
    commande => console.log("1 2 3 soleil"))

console.log("hey garcon je suis C")
