"use strict";

const hobbies = ["hiking", "swimming", "kayaking", "camping", "coding"];

/*
    Quick demo on questions regarding arrays.
*/
console.log("Traditional For Loop");
for (let index = 0; index < hobbies.length; index++) {
    console.log(hobbies[index]);
}

console.log("\nFor Of Loop");
for (const hobby of hobbies) {
    console.log(hobby);
}

console.log("\nForEach Loop");
hobbies.forEach((hobby) => {
    console.log(hobby);
});


/*
    Simple example of DOM manipulation
*/
const h1 = document.getElementById("h1");
h1.textContent = "Hello Class";
h1.style.color = "blue";


/*
    A "connect the dots" example of using loops
    to manipulate the DOM
*/

// Getting a reference to the <ul> with the id of "hobby-list"
const hobbyList = document.getElementById("hobby-list");

// Looping through the hobbies array with a forEach
// and creating a <li> for each hobby
hobbies.forEach((hobby) => {
    // Creating the <li> and setting it's text content
    // to the current hobby
    const hobbyListItem = document.createElement("li");
    hobbyListItem.textContent = hobby;

    // Appending the <li> to the <ul>
    hobbyList.appendChild(hobbyListItem);
});


/*
    Methods on Object Literals
*/
const person = {
    name: "Dan",
    birthYear: 1988,
    calculateAge: function (currentYear) {
        return currentYear - this.birthYear;
    }
};

console.log("\nMethods on Object Literals");
console.log(`${person.name} is ${person.calculateAge(2026)} years old`);
