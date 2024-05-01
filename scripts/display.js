function displayCard() {
    //get the HTML div to display the little cards
    const DIV = document.getElementById("pets");
    let card = "";
    //travel the array (for loop)
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        card += `
        <div class="pet">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.service}</p>
        </div>`
            ;
    }
    //HTML template for the cards

    //insert the card into the HTML div
    DIV.innerHTML = card;
}

function displayRow() {
    const TABLE = document.getElementById("petRows");

    let tr = "";
    
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        tr+=`
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.price}</td>
                <td>${pet.type}</td>
                <td>${pet.action}</td>
                <td>
                    <button class="delete-btn" onclick="deletePet(${i});"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
            `
    }
    //HTML template for the cards

    //insert the card into the HTML div
    TABLE.innerHTML = tr;
}

function displayTypeCount() {
    let dog = 0;
    let bird = 0;
    let racoon = 0;
    let girafe = 0;

    for( let i = 0; i < petSalon.pets.length; i++){        
        let pet = petSalon.pets[i];
        
        if(pet.type.toLowerCase() == "bird") {
            bird++;
        }
        if(pet.type.toLowerCase() == "girafe") {
            girafe++;
        }
        if(pet.type.toLowerCase() == "dog") {
            dog++;
        }
        if(pet.type.toLowerCase() == "racoon") {
            racoon++;
        }
        
    }
    document.getElementById("totalBirds").innerHTML = bird;
    document.getElementById("totalGirafes").innerHTML = girafe;
    document.getElementById("totalDogs").innerHTML = dog;
    document.getElementById("totalRacoons").innerHTML = racoon;
}

function displayServiceCount() {
    //declare the variable 
    let grooming = 0;
    let vaccines = 0;
    let nails = 0;
    let hotel = 0;
    let profits=0;
    //travel the array
    for (let i = 0; i < petSalon.pets.length; i++) {
        //getthe current pet
        let pet = petSalon.pets[i];

        profits = profits + pet.price;

        if (pet.service.toLowerCase() == "grooming") {
            grooming++;
        }
        if (pet.service.toLowerCase() == "vaccines") {
            vaccines++;
        }
        if (pet.service.toLowerCase() == "nails trimming") {
            nails++;
        }
        if (pet.service.toLowerCase() == "hotel") {
            hotel++;
        }
    }
    document.getElementById("totalGroomings").innerHTML = grooming;
    document.getElementById("totalVaccines").innerHTML = vaccines;
    document.getElementById("totalNails").innerHTML = nails;
    document.getElementById("totalHotel").innerHTML = hotel;
    document.getElementById("profits").innerHTML = profits;
    
}