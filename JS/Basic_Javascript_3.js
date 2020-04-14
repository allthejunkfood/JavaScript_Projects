function addNum() {
    A = 10;
    B = 2;
    add = A+B;
    subtract = A-B;
    multiply = A*B;
    divide  = A/B;
    multiple = (10+2) * 30 - 10 / 2;
    modulus = 12 % 7;
    x = 10;
    y = 10;
    inc = ++x;
    dec = --y;
    document.getElementById("Math").innerHTML = "10 + 2 =" + add;
    document.getElementById("Subtract").innerHTML = "10 - 2 = "+ subtract;
    document.getElementById("Multiply").innerHTML = "10 * 2 =" + multiply;
    document.getElementById("Divide").innerHTML = "10 / 2 =" + divide;
    document.getElementById("MultipleOps").innerHTML = "(10-2) * 3 / 2 + (2 + 14) =" + multiple;
    document.getElementById("Modulus").innerHTML = "Telve modulus seven, remainder = " + modulus;
    document.getElementById("Unary").innerHTML = -x;
    document.getElementById("Increment").innerHTML = inc;
    document.getElementById("Decrement").innerHTML = dec;
    document.getElementById("Random").innerHTML = Math.round(Math.random () * 100); //Returns a number rounded to the nearest integer
}