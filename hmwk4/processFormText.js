var obj = 0;
document.getElementById("inputText").innerHTML = obj + ' characters';
document.getElementById("inputWord").innerHTML = obj + ' words';

function count(obj){
    var numLetters = obj.length;
    var character = ' characters'
    // change characters to character if 1
    numLetters == 1 ? character = ' character' : null;

    document.getElementById("inputText").innerHTML = numLetters + character;

    var count = 0;
    var word = ' words'

    count = obj.split(" ").length;

    obj.charAt(obj.length-1) == " " ? count-- : count = count;
    // change words to word if 1
    count == 1 ? word = ' word' : null;

    document.getElementById("inputWord").innerHTML = count + word;

}
