'use strict'

alert('HELLO')

let userName = prompt('whats Your Name')
console.log(userName);
alert("Welcome " + userName + " To My Website")
document.write("Welcome " + userName + " To My Website")

let grade = 0;

let userAns = prompt('Mr/Ms ' + userName + ' Are you looking for help in your business plaese anser Y or N yes or No ').toUpperCase();


<<<<<<< HEAD

while (userAns != "Y" && userAns != "N" && userAns != "yes" && userAns != "No") {
=======
function abd(){
    while (userAns != "Y" && userAns != "N" && userAns != "yes" && userAns != "No") {

        userAns = prompt('plaese anser \'Y or N\' \'yes or No\' ');
>>>>>>> 0b95446ed4ddfc13c9ccd57f65fabf10e9d6519c

    userAns = prompt('plaese anser \'Y or N\' \'yes or No\' ');

}


if (userAns == "Y" || userAns == "N" || userAns == "yes" || userAns == "no") {
    console.log('Greet');
    alert('Greet');
    grade++;
}
else {
    userAns = prompt('plaese anser \'Y or N\' \'yes or No\' ');
    console.log(userAns);

}



} abd();






let userAns1 = prompt('do you have your own business ' + userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();


<<<<<<< HEAD

while (userAns1 != "Y" && userAns1 != "N" && userAns1 != "yes" && userAns1 != "No") {
=======
function abd1(){
    while (userAns1 != "Y" && userAns1 != "N" && userAns1 != "yes" && userAns1 != "No" ) {

        userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
>>>>>>> 0b95446ed4ddfc13c9ccd57f65fabf10e9d6519c

    userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

}

<<<<<<< HEAD

if (userAns1 == "Y" || userAns1 == "N" || userAns1 == "yes" || userAns1 == "no") {
    console.log('Dont Worry');
    alert('dont worry');
    grade++;
}
else {
    userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
    console.log(userAns1);
=======
} abd1()
>>>>>>> 0b95446ed4ddfc13c9ccd57f65fabf10e9d6519c

}





function abd2() {
    


let userAns2 = prompt('Do you know anything about Abdallah?' + userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();



while (userAns2 != "Y" && userAns2 != "N" && userAns2 != "yes" && userAns2 != "No") {

    userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

}


if (userAns2 == "Y" || userAns2 == "N" || userAns2 == "yes" || userAns2 == "no") {
    console.log('you will know');
    alert('you will know');
    grade++;
}
else {
    userAns2 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
    console.log(userAns2);

<<<<<<< HEAD
}

=======
    } abd2();
>>>>>>> 0b95446ed4ddfc13c9ccd57f65fabf10e9d6519c





<<<<<<< HEAD
let userAns3 = prompt('Have you ever deal with advertising agencies? mr/ms ' + userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();

=======
function abd3(){
        while (userAns3 != "Y" && userAns3 != "N" && userAns3 != "yes" && userAns3 != "No" ) {
>>>>>>> 0b95446ed4ddfc13c9ccd57f65fabf10e9d6519c


while (userAns3 != "Y" && userAns3 != "N" && userAns3 != "yes" && userAns3 != "No") {

    userAns3 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

}


if (userAns3 == "Y" || userAns3 == "N" || userAns3 == "yes" || userAns3 == "no") {
    console.log('I understand your answer Mr/Ms ' + userName + ' I want you to rest assured ');
    alert('I understand your answer Mr/Ms ' + userName + ' I want you to rest assured ');
    grade++;
}
else {
    userAns3 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
    console.log(userAns3);

<<<<<<< HEAD
}

=======
    } abd3();
>>>>>>> 0b95446ed4ddfc13c9ccd57f65fabf10e9d6519c




let userAns4 = prompt('Have you ever dealt with advertising agencies? mr/ms ' + userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();

<<<<<<< HEAD

=======
function abd4(){
          while (userAns4 != "Y" && userAns4 != "N" && userAns4 != "yes" && userAns4 != "No" ) {
>>>>>>> 0b95446ed4ddfc13c9ccd57f65fabf10e9d6519c

while (userAns4 != "Y" && userAns4 != "N" && userAns4 != "yes" && userAns4 != "No") {

    userAns4 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

}


if (userAns4 == "Y" || userAns4 == "N" || userAns4 == "yes" || userAns4 == "no") {
    console.log('Please go to the click link ("http://127.0.0.1:5500/aboutus.html")');
    alert('Please go to the click link ("http://127.0.0.1:5500/aboutus.html")');
    grade++;
}
else {
    userAns4 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
    console.log(userAns4);

}

        } abd4();





alert(" lets have afun " + userName + " And  play a guessing game")


function abd5(){

let userO = 0;
for (let i = 0; i < 4; i++) {

    let guessU = Number(prompt("Choose a number from 1 to 10 to find out"));

    if (guessU == 3) {
        alert("You have guessed correctly");
        grade++;
        break;

    }
    else if (guessU > 5) {
        alert("You guessing too low!")
        userO++;


    } else {
        alert("You guessing too high!")
        userO++;

    }

}
if (userO == 4) {
    alert("Game over, Good luck...")
}


 } abd5();


 function abd6(){
let drinks = ['coffe', 'tea', 'water', 'milk'];
let correct = false;
for (let attempt = 1; attempt <= 6; attempt++) {
    let q1 = prompt("whats my fav drinks??? ").toLowerCase();

    for (let i = 0; i < drinks.length; i++) {
        if (q1 == drinks[i]) {
            alert('corret')
            attempt = 10;
            grade++;
            break;
        }

    }
    if (correct) {
        break;
    }
}

} abd6();

alert("your final score is " + grade + "/7")








