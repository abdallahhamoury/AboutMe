'use strict'

alert ('HELLO')

let userName = prompt ('Wshts Your Name')
console.log(userName);
alert("Welcome " +userName+ " To My Website" )


let userAns = prompt('Mr/Ms ' +userName+ ' Are you looking for help in your business')
console.log(userAns);
alert('Mr/Ms ' +userName+ ' Don\'t worry, you are in the right place')

let userAns1 = prompt('do you have your own business ' +userName+ 'plaese anser Y or N' ).toUpperCase();

switch (userAns1){
    case 'Y':
    console.log('Greet');
    alert('Greet');
    break;

    case 'N':
    console.log('lets strat one');
    alert('lets start one');
    break;
    default:
        console.log('plaese anser Y or N');
        alert('plaese anser Y or N')
        break;

}

let userAns2 = prompt( 'Mr/Ms ' +userName+  ' Do you know anything about Abdallah? please anser Y or N').toUpperCase();

switch (userAns2){
    case 'Y':
    console.log('Very nice');
    alert('Very NiCe');
    break;

    case 'N':
    console.log('you will know');
    alert('you will know ' +userName+' I want you to take a look at the page ' )
    break;

    default:
        console.log('plaese anser Y or N');
        alert('plaese anser Y or N')
        break;


}

let userAns3 = prompt( 'Mr/Ms ' +userName+  ' Have you ever dealt with advertising agencies? anser Y or N').toUpperCase();

switch (userAns3){
    case 'Y':
    console.log(userAns3);
    alert('Mmmm');
    break;

    case 'N':
    console.log(userAns3);
    alert('I understand your answer Mr/Ms ' +userName+' I want you to rest assured ' )
    break;

    default:
        console.log('plaese anser Y or N');
        alert('plaese anser Y or N')
        break;
}


let userAnsL = prompt( 'Mr/Ms ' +userName+  ' Are you interested in stimulating sales? anser Y or N').toUpperCase();

switch (userAnsL){
    case 'Y':
    console.log('Please go to the click link ("http://127.0.0.1:5500/aboutus.html")');
    alert('Please go to the click link ("http://127.0.0.1:5500/aboutus.html")');
    break;

    case 'N':
    console.log('I understand your answer' +userName+ 'Please go to the click link("http://127.0.0.1:5500/aboutus.html"); ');
    alert('I understand your answer ' +userName+' I want you to rest assured ' )
    break;

    default:
        console.log('plaese anser Y or N');
        alert('plaese anser Y or N')
        break;
}