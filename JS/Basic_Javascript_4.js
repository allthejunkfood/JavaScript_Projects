function myDictionary() {
    var Car = {
        //Make:"Subaru", //Commented out to create an error
        Model:"Impreza",
        Year:"2014",
        Color:"Opal"
    };
    document.getElementById("Dictionary").innerHTML = Car.Make;
}