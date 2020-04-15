function FullSentence() {
        var part1 = "I ";
        var part2 = " found ";
        var part3 = " a ";
        var part4 = " carrot!";
        var part5 = " -Cheese"
        var WholeSentence = part1.concat(part2,part3,part4,part5);
        document.getElementById("Concatenate").innerHTML = WholeSentence;
}

function SliceMethod() {
    var sentence = "It's all in the reflexes";
    var section = sentence.slice(5,11);
    document.getElementById("SliceMethod").innerHTML = section;
}

function StringMethod(){
    var x = 1000;
    document.getElementById("NumbersToString").innerHTML = x.toString();
}

function PrecisionMethod() {
    var pi = 3.14159265359;
    document.getElementById("Precision").innerHTML = pi.toPrecision(5);
}