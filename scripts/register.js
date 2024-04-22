// create object literal
let petSalon = {
    name: "the fashion pet",
    phone: "(999)-999-9999",
    address: "123 Main Street, San Diego, CA 92108",
    pets: []
}
// display Salon object literal on the HTML.

const salonInfo = document.getElementById("salon-info");
salonInfo.innerHTML = `
 <h3>Welcome to ${petSalon.name}<h/3>
 <p>Location: ${petSalon.address}</p>
 <p>Phone: ${petSalon.phone}</p>
 `;


//create a pet constructor.

function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

function register() {
    let inputName = document.getElementById("Name").value;
    let inputAge = document.getElementById("Age").value;
    let inputGender = document.getElementById("Gender").value;
    let inputBreed = document.getElementById("Breed").value;
    let inputService = document.getElementById("Service").value;

    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);

    // Display the pet details on the HTML page

    let petDetails = document.createElement('div');
    petDetails.innerHTML = `
    <p>${newPet.name}'s Info</p>
    <p>Age: ${newPet.age}</p>
    <p>Gender: ${newPet.gender}</p>
    <p>Breed: ${newPet.breed}</p>
    <p>Service: ${newPet.service}</p>
`;
    let petList = document.getElementById("petList");
    petList.appendChild(petDetails);

    // clear form
    document.getElementById("petForm").reset();
}




