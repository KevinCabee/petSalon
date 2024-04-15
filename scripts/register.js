let petSalon = {
    name: "the fashion pet",
    phone: "999-999-9999",
    address: {
        country: "US",
        city: "San Francisco",
        ZipCode: "12345",
    },
    pets: [
        {
            name: "Scooby",
            age: 80,
            gender: "Male",
            service: "No",
            breed: "Great Dane",
        },
        {
            name: "Scrappy",
            age: 60,
            gender: "Male",
            service: "Yes",
            breed: "Chihuahua",
        },
        {
            name: "Tweety",
            age: 85,
            gender: "Female",
            service: "No",
            breed: "Yellow Canary",
        },

    ],
}

// Ex 1. Show just the name of the pet.
// console.log(petSalon.pets[2].name);

// Ex 2. Calculate the average age of the pets.
// let totalAge = 0;

// for (let i = 0; i < petSalon.pets.length; i++) {
//     totalAge = totalAge + petSalon.pets[i].age;
//     //totalAge+=petSalon.pets[i].age; this is another way to write it. 
// }
// let averageAge = totalAge / petSalon.pets.length;
// console.log("total sum is " + totalAge);
// console.log("the average age of the pets: " + averageAge);
// document.getElementById("avgAgePets").textContent = averageAge;



// 2. Display Registered Pets Count:
function displayPetCount() {
    let petCount = petSalon.pets.length; //petÇount is located under petSalon as pets. we use the (.length) to irirate the whole array. 
    document.getElementById("petCount").textContent = petCount;// getting the element by id in the document tells the HTML where to put the return.  
}
displayPetCount();


// 3. Display Pet Names:
function displayPetName() {
    let petNamesList = document.getElementById('petNames');//Let Javascript know where to place the list of pet names. 

    for (let i = 0; i <= petSalon.pets.length; i++) {
        let petName = petSalon.pets[i].name;
        // console.log(petName);
        let listItem = document.createElement("li");//This creates the list item element.
        listItem.textContent = petName;//Now, to display that listitem element, add (.textContent) and (equal) to what it needs to display. in this case we are taking the listItem element telling it to display its textContents as (=) petNames.
        petNamesList.appendChild(listItem);//append means to add. therefore adding a child to the petNameList element consecutively to the memory, in terms creating the list.

    }
}
displayPetName();


// Extra Challenge: Create a function to calculate the average of the pet's ages.
function calculateAverageAgePet(){

    let totalAge = 0;//We start at zero so we can take in to consideration ALL the objects in the array. 
    
    for (let i = 0; i < petSalon.pets.length; i++) {
        totalAge += petSalon.pets[i].age;
    }
    let averageAge = totalAge / petSalon.pets.length;
    document.getElementById("avgAgePets").textContent = averageAge;

}
calculateAverageAgePet();



