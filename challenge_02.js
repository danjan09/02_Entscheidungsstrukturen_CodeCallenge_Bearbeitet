/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein      
Geben über eine Prompt-Anforderung ein Alter ein       //1 

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5   // Milch  --> age > 0 AND age < 6
Alter 6-12  // Saft
Alter 13-17 // Cola
18 +        // Wein

--> ""Name" darf "das Getränk" trinken."


/* Getränke-Challenge */

let firstName;
let age;

firstName = prompt("Bitte Name eingeben:");
age = (prompt("Bitte Alter eingeben:"));

age = parseInt(age);            

// console.log(firstName);
// console.log();                 //1


switch (true)
{
    case (age >= 0 && age < 6):
            console.log (firstName + " darf Milch trinken." );
        break;
    case (age >= 6 && age < 13):
            console.log (firstName + " darf Saft trinken." );
        break;
    case (age >= 13 && age < 18):
            console.log (firstName + " darf Cola trinken." );
        break;
    case (age >= 18 && age < 101):
            console.log (firstName + " darf Wein trinken." );
        break;
    case (age >= 100 && age < 120):
            console.log (firstName + " sollte nur noch Tee trinken." );
        break;

    default:
        console.log("Bei der Angabe des Alters ist etwas schief gelaufen.");
        break;
}

// <-- eigene version




// --> verkürzt


// let firstName;
// let age;

// firstName = prompt("Bitte Name eingeben:");
// age = parseInt(prompt("Bitte Alter eingeben:"));


// switch (true)
// {
//     case (age <= 5):
//             console.log (firstName + " darf Milch trinken." );
//         break;
//     case (age<= 13):
//             console.log (firstName + " darf Saft trinken." );
//         break;
//     case (age <= 17):
//             console.log (firstName + " darf Cola trinken." );
//         break;
//     case (age <= 100):
//             console.log (firstName + " darf Wein trinken." );
//         break;
//     case (age >= 100 && age < 120):
//             console.log (firstName + " sollte nur noch Tee trinken." );
//         break;

//     default:
//         console.log("Bei der Angabe des Alters ist etwas schief gelaufen.");
//         break;
// }

