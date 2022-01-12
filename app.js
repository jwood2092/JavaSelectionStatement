console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let rand = Math.floor(Math.random() * 100) + 1; 

let userInput = window.prompt("Guess a number between 1 and 100.");

if (userInput < rand) {
    console.log("Too Low!");
}

else if (userInput > rand) {
    console.log("Too High!");
}

else {
    console.log("congrats! You guessed correctly!");
}

// Exercise 2

let cheese = window.prompt("What's your favorite cheese?");

switch (cheese.toLocaleLowerCase()){
    case "brie":
        console.log("Brie is also nicknamed 'The Queen of Cheeses', great choice!");
        break;
    case "blue":
        console.log("Fun fact, this cheese gets it's color for penicillum mold");
        break;
    case "Gouda":
        console.log("That's some GOUDA cheese");
        break;
    case "Mozzarella":
        console.log("Mozzarella is traditionally from southern Italy");
        break;
    default:
        console.log("Have you no knowledge of good cheese?");
                     


}