/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5   // Milch  --> age > 0 AND age < 6
Alter 6-12  // Saft
Alter 13-17 // Cola
18 +        // Wein

--> ""Name" darf "das Getränk" trinken."


/* Getränke-Challenge */

let Name;
let Alter;

Name = prompt("Bitte Name eingeben:");
Alter = prompt("Bitte Alter eingeben:");

Alter = parseInt(Alter);

console.log(Name);
console.log(Alter);
