var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");

function show(x) {
    document.getElementById(x).className = "";
};

function hide(x) {
    document.getElementById(x).className = "hidden";
}

function setTypewriter(x) {
    document.getElementById(x).className = "typewriter"
};

function removeTypewriter(x) {
    document.getElementById(x).className = "";
}

setTimeout(function() {
    show("lineTwo");
    setTypewriter("lineTwo");
    removeTypewriter("lineOne");
}, 3000);

setTimeout(function() {
    show("lineThree");
    setTypewriter("lineThree");
    removeTypewriter("lineTwo");
}, 6000);


setTimeout(function() {
    show("buttonOne");
}, 9000);

buttonOne.addEventListener("click", function() {
    hide("buttonOne");
    show("lineFour");
    setTypewriter("lineFour");
    removeTypewriter("lineThree");

    setTimeout(function() {
        show("lineFive");
        setTypewriter("lineFive");
        removeTypewriter("lineFour");
    }, 3000);

    setTimeout(function() {
        show("buttonTwo");
    }, 6000);
});

buttonTwo.addEventListener("click", function() {
    var userName = prompt("My name is:").toUpperCase();
    
    document.getElementById("userName").innerHTML = userName;
    document.getElementById("userName2").innerHTML = userName;
    document.getElementById("userName3").innerHTML = userName;

    hide("buttonTwo");
    show("lineSix");
    setTypewriter("lineSix");
    removeTypewriter("lineFive");

    setTimeout(function() {
        show("lineSeven");
        setTypewriter("lineSeven");
        removeTypewriter("lineSix");
    }, 3000);

    setTimeout(function() {
        show("lineEight");
        setTypewriter("lineEight");
        removeTypewriter("lineSeven");
    }, 6000);

    setTimeout(function() {
        show("lineNine");
        setTypewriter("lineNine");
        removeTypewriter("lineEight");
    }, 9000);

    setTimeout(function() {
        show("buttonThree");
    }, 12000);
});

buttonThree.addEventListener("click", function() {
    
    hide("lineOne");
    hide("lineTwo");
    hide("lineThree");
    hide("lineFour");
    hide("lineFive");
    hide("lineSix");
    hide("lineSeven");
    hide("lineEight");
    hide("lineNine");


    alert("Robot clearly is struggling to make up a story and seems like he could use some help with two nouns.");
    var nounOne = prompt("Noun #1:").toUpperCase();
    var nounTwo = prompt("Plural Noun #2:").toUpperCase();

    document.getElementById("nounOne").innerHTML = nounOne;
    document.getElementById("nounTwo").innerHTML = nounTwo;

    hide("buttonThree");
    show("lineTen");
    setTypewriter("lineTen");

    setTimeout(function() {
        show("lineEleven");
        setTypewriter("lineEleven");
        removeTypewriter("lineTen");
    }, 3000);

});

