function myWord() {
    document.getElementById("Word").innerHTML = (typeof "Word");
};

function myNum() {
    document.getElementById("Number").innerHTML = (typeof 15);
};

function infinity(){
    document.getElementById("Infinity").innerHTML = (2E310);    
};

function ninfinity(){
    document.getElementById("NegativeInfinity").innerHTML = (-2E310);
};

function BoolTrue() {
    document.getElementById("boolTrue").innerHTML = (10 > 3);
};

function BoolFalse() {
    document.getElementById("boolFalse").innerHTML = (3 > 100);
};

function Coercion() {
    document.getElementById("coercion").innerHTML = "13" + 37;
}

function DoubleTrue() {
    document.getElementById("doubleEqualsTrue").innerHTML = (20 == (10+10));
};

function DoubleFalse() {
    document.getElementById("doubleFalse").innerHTML = 20 == 10;
};

function tripleTrue() {
    document.getElementById("tripleTrue").innerHTML = 30===30;
};

function tripleFalse1() {
    document.getElementById("tripleFalse1").innerHTML = "40" === 30;
};

function tripleFalse2() {
    document.getElementById("tripleFalse2").innerHTML = "twenty" === 20;
};

function tripleFalse3() {
    document.getElementById("tripleFalse3").innerHTML = "word" === "nonsense";
};

function andTwoNum() {
    document.getElementById("andTwoNum").innerHTML = 5 > 4 && 2 < 5;
};

function andTwoNum1() {
    document.getElementById("andTwoNum1").innerHTML = 5 > 4 && 2 > 5;
};

function orTwoNum() {
    document.getElementById("orTwoNum").innerHTML = 10 < 20 || 30 < 10;
};

function orTwoNum1() {
    document.getElementById("orTwoNum1").innerHTML = 5 < 4 || 7 > 9;
};

function notFalse() {
    document.getElementById("notFalse").innerHTML = !(5===5);
};

function notTrue() {
    document.getElementById("notTrue").innerHTML = !(10<5);
};

console.log("Ten plus ten:")
console.log(10+10);
console.log("Two is less than one :")
console.log(2<1);