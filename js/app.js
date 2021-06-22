'use strict'

alert('HELLO')

let userName = prompt('Wshts Your Name')
console.log(userName);
alert("Welcome " + userName + " To My Website")
document.write("Welcome " + userName + " To My Website")



let userAns = prompt('Mr/Ms ' + userName + ' Are you looking for help in your business plaese anser Y or N yes or No ').toUpperCase();

function userAnsFun() {

    while (userAns != "Y" && userAns != "N" && userAns != "yes" && userAns != "No") {

        userAns = prompt('plaese anser \'Y or N\' \'yes or No\' ');

    }


    if (userAns == "Y" || userAns == "N" || userAns == "yes" || userAns == "no") {
        console.log('Greet');
        alert('Greet');

    }
    else {
        userAns = prompt('plaese anser \'Y or N\' \'yes or No\' ');
        console.log(userAns);

    }


}

userAnsFun();






let userAns1 = prompt('do you have your own business ' + userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();

function userAnsFun() {

    while (userAns1 != "Y" && userAns1 != "N" && userAns1 != "yes" && userAns1 != "No" ) {

        userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

    }


    if (userAns1 == "Y" || userAns1 == "N" || userAns1 == "yes" || userAns1 == "no" ) {
        console.log('Greet');
                alert('Greet');

    } 
    else {
        userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
      console.log(userAns1);

    }


  }

  userAnsFun();


  let userAns2 = prompt('Do you know anything about Abdallah?'+ userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();

  function userAnsFun1() {

      while (userAns2 != "Y" && userAns2 != "N" && userAns2 != "yes" && userAns2 != "No" ) {

          userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

      }


      if (userAns2 == "Y" || userAns2 == "N" || userAns2 == "yes" || userAns2 == "no" ) {
          console.log('you will know');
                  alert('you will know');

      } 
      else {
          userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
        console.log(userAns2);

      }


    }

    userAnsFun1();



    let userAns3 = prompt('Have you ever deal with advertising agencies? mr/ms '+ userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();

    function userAnsFun2() {

        while (userAns3 != "Y" && userAns3 != "N" && userAns3 != "yes" && userAns3 != "No" ) {

            userAns1 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

        }


        if (userAns3 == "Y" || userAns3 == "N" || userAns3 == "yes" || userAns3 == "no" ) {
            console.log('I understand your answer Mr/Ms ' + userName + ' I want you to rest assured ');
                    alert('I understand your answer Mr/Ms ' + userName + ' I want you to rest assured ');

        } 
        else {
            userAns3 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
          console.log(userAns3);

        }


      }

      userAnsFun2();


      let userAns4 = prompt('Have you ever dealt with advertising agencies? mr/ms '+ userName + ' plaese anser \'Y or N\' \'yes or No\' ').toUpperCase();

      function userAnsFun3() {

          while (userAns4 != "Y" && userAns4 != "N" && userAns4 != "yes" && userAns4 != "No" ) {

              userAns4 = prompt('plaese anser \'Y or N\' \'yes or No\' ');

          }


          if (userAns4 == "Y" || userAns4 == "N" || userAns4 == "yes" || userAns4 == "no" ) {
              console.log('Please go to the click link ("http://127.0.0.1:5500/aboutus.html")');
                      alert('Please go to the click link ("http://127.0.0.1:5500/aboutus.html")');

          } 
          else {
              userAns4 = prompt('plaese anser \'Y or N\' \'yes or No\' ');
            console.log(userAns4);

          }


        }

        userAnsFun3();




alert(" lets have afun " + userName + " And  play a guessing game")







let userO = 0;
for (let i = 0; i < 4; i++) {

    let guessU = Number(prompt("Choose a number from 1 to 10 to find out my favorite drink from the list"));

    if (guessU == 3) {
        alert("You have guessed correctly");
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



