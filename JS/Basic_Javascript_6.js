function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
};

function RollerCoaster(Style) {
    this.RollerCoaster_Style = Style;
};

var Volcano = new RollerCoaster("Verticle Loop");

function NewandThis() {
    document.getElementById("New_and_This").innerHTML = "The Volcano has a " + Volcano.RollerCoaster_Style 
}

function NestedMess() {
    function Sentence(){
        var Hello = "Hello"
        var World = "World"
        var end = Hello + " " + World;
        console.log(end)
        return end;   
    };
    
    document.getElementById("NestedMess").innerHTML = Sentence();
};