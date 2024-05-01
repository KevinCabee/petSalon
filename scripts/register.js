// create object literal
let petSalon = {
    name: "the fashion pet",
    phone: "(999)-999-9999",
    address: "123 Main Street, San Diego, CA 92108",
    pets: []
}

// constructor (blueprint)
function Pet(name, age, gender, service, type, action) {
    //attributes=parameters;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.type = type;
    this.action = action;
    this.price=getServicesPrice(service);
}

function isValid(pet){
    let validation=true;// we are fine

    if(pet.name==""){
        validation=false;
        // alert("Please enter a name");
        showNotification("Please add a name","error");
    }
    if(pet.age==""){
        validation=false;
        // alert("Please enter a name");
        showNotification("Please add age","error");
    }
    if(pet.gender==""){
        validation=false;
        // alert("Please enter a name");
        showNotification("Please add gender","error");
    }
    if(pet.service==""){
        validation=false;
        // alert("Please enter a service");
        showNotification("Please add service","error");
    }
    if(pet.type==""){
        validation=false;
        // alert("Please enter a name");
        showNotification("Please select pet type","error");
    }
    if(pet.action==""){
        validation=false;
        // alert("Please choose a payment option");
        showNotification("Please select pet type","error");
    }
    return validation; //returning the result oif the validation
}


function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputType = document.getElementById("txtType").value;
    let inputAction = document.getElementById("txtAction").value;

    let newPet = new Pet(inputName, inputAge, inputGender, inputService, inputType, inputAction);

    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        displayRow();
        displayServiceCount();
        displayTypeCount();
        showNotification("successfully registered","success");
        console.log(petSalon.pets); //displaying the pets array
    }
}


function deletePet(x){
    console.log("Deleting pet..." + x );
    document.getElementById(x).remove();
    petSalon.pets.splice(x, 1);
    displayRow();
    displayServiceCount();
    displayTypeCount();
    showNotification("Pet has been deleted","error");
}

function getServices() {
    // read the localSStorage to get the services
    let serviceList = readItems();
    let option="";
    //travel the array of the services
    for(let i=0;i<serviceList.length;i++){
        //create the HTML <option> </option> element
        option=`<option value="${serviceList[i].service}"> ${serviceList[i].service} </option>`;
        $("#txtService").append(option);//JQuery Option
        //document.getElementById("txtServices").innerHTML=option;
    }
}

function getServicesPrice(serviceName){
    //read the LS
    let serviceList = readItems();
    let price=0;
    //travel the array
    for(let i=0;i<serviceList.length;i++){
        let service = serviceList[i];
        if(serviceName.toLowerCase() == service.service.toLowerCase()){
            price=service.price;
        }
    }                                           
    return Number(price);
}


function init(){
    let pet1 = new Pet("Scooby", 99, "Female", "Grooming","Dog", "Credit");
    let pet2 = new Pet("Scrappy", 79, "Male", "Vaccines","Racoon", "Debit");
    let pet3 = new Pet("Tweety", 99, "Female", "Hotel","Girafe", "Credit");
    let pet4 = new Pet("Tony", 79, "Male", "Nails trimming","Racoon","Debit");
    petSalon.pets.push(pet1,pet2,pet3,pet4);

    displayRow();
    displayTypeCount();
    getServices();
    displayServiceCount();    
}



window.onload=init;// wait to render the HTML the loiad the init



