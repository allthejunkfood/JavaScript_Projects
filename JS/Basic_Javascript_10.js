function callLoop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["LonQin","Guqin","Zheng","Konghou","Ocarina"];
var Content = "";
var Y;
function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("ListOfInstruments").innerHTML = Content;
}

function arrayFunction() {
    var videoGames = []; // creates an empty array
    videoGames[0] = "Zelda"
    videoGames[1] = "Mario"
    videoGames[2] = "BanjoKazooie"
    videoGames[3] = "Metroid"
    videoGames[4] = "Pokemon"
    videoGames[5] = "DonkeyKong"
    document.getElementById("Array").innerHTML = "My favorite game is " + videoGames[0];
}

function constantFunction() {
    const Link = {type:"Hero of Time", tunic:"Green", weapon:"Master Sword"};
    document.getElementById("Constant").innerHTML = "Link is the " + Link.type +". He wears the " + Link.tunic + " tunic and prefers the " + Link.weapon + " to fight with.";
    Link.tunic = "Red";
    Link.weapon = "Goron Hammer";
    document.getElementById("ConstantNew").innerHTML = "But then he changed to the " + Link.tunic + " tunic and is now using the " + Link.weapon + " to fight with.";
}

// let doesn't work as a global variable, only within a function. 

function LetThisWork() {
    let thisWork = "It really works!!"
    document.getElementById("LetThisWork").innerHTML = thisWork;
}

function CreateNewEnemy() {
    let thug = {
        health: "20 hp",
        armor: "leather cuirass",
        weapon: "short sword",
        damage: "1d6",
        temperment: "goofy",      
        create : function() {
            return "HP: " +thug.health + " Armor: " + thug.armor + " Weapon: " + thug.weapon + " Weapon Damage: " + thug.damage + " Temperment: " + thug.temperment;
        }
    };
    document.getElementById("CreateNewEnemy").innerHTML = thug.create();
}