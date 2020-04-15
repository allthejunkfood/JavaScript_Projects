function localVariable()
{
    var num = 10;
    console.log("Local Variable " + num);
};

function errorVariable()
{
    try {
        10 + num;
    } catch (error) {
        console.log(error)
    };
};
x = 12;
console.log(x + " is a global variable")
localVariable();
errorVariable();

function getDate() {
    var time = new Date().getHours();
    if (time < 12){
        var greet = "Good Morning!"
        return document.getElementById("Greeting").innerHTML = greet;
    }
    else if (time > 12){
        var greet = "Good Evening!"
        return document.getElementById("Greeting").innerHTML = greet;
    }
  
}

function AgeCheck() {
    var age = document.getElementById("Age").value;
    if (age < 25 ){
        document.getElementById("AgeResult").innerHTML = "Sorry, too young.";
    }
    else if (age > 25){
        document.getElementById("AgeResult").innerHTML = "You are old enough.";
    }
}