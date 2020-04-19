function ColorFunction() {
    var ColorOutput;
    var Colors = document.getElementById("ColorInput").value;
    var ColorString = " is a great color!";
    switch(Colors) {
        case "Burgundy":
            ColorOutput = "Burgundy" + ColorString;
            break;
        case "Fuschia":
            ColorOutput = "Fuschia" + ColorString;
            break;
        case "Yellow":
            ColorOutput = "Yellow" + ColorString;
            break;
        default:
            ColorOutput = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = ColorOutput;
}

function HelloWorldFunction() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "Your clothes are red now!";
}

function HelloWorldCanvas() {
    var c = document.getElementById("IDName");
    var ctx = c.getContext("2d");
    ctx.font = "30px Ariel";
    ctx.fillText("Hello World!", 10, 50);
}