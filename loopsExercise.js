// LOOPS EXERCISE

// 1
for (i = 1; i <= 7;i++){
    console.log(i);
}

// 2
for (i = 6; i <= 26; i++){
    console.log(i);
}

// 3a
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"]

// 3b
for (name of wizards){
    console.log(name);
}

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
}

// BONUS
// 5a
const hogwartsHouses = [
    "Griffyndor", 
    "Hufflepuff", 
    "Ravencalw", 
    "Slytherin"
];

// 5b
for (houses of hogwartsHouses){
    for (letters of houses){
    console.log(houses);
    }
}

// 6a
const qoute = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];
// 6b
let message = "";
for (word of qoute){
    message = message + `${word}`;
}
console.log(message);

message = message.slice(0, -1);
console.log(message);
