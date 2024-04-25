// create object literal
let petSalon = {
    name: "the fashion pet",
    phone: "(999)-999-9999",
    address: "123 Main Street, San Diego, CA 92108",
    pets: []
}


// constructor (blueprint)
function Pet(name, age, gender, service, type) {
    //attributes=parameters;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.type = type;
}

function isValid(pet){
    let validation=true;// we are fine

    if(pet.name==""){
        validation=false;
        alert("Please enter a name");
    }
    if(pet.service==""){
        validation=false;
        alert("Please enter a service");
    }
    return validation; //returning the result oif the validation
}


function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputType = document.getElementById("txtType").value;

    let newPet = new Pet(inputName, inputAge, inputGender, inputService, inputType);

    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        displayRow();
        displayServiceCount();
        displayTypeCount();
        console.log(petSalon.pets); //displaying the pets array
    }
}

function deletePet(){
    console.log("Deleting pet..." );
}

function init(){
    let pet1 = new Pet("Scooby", 99, "Male", "Grooming","Dog");
    let pet2 = new Pet("Scrappy", 79, "Male", "Vaccines","Bird");
    petSalon.pets.push(pet1,pet2);

    displayRow();
    displayServiceCount();
    displayTypeCount();
    
}

window.onload=init;// wait to render the HTML the loiad the init



