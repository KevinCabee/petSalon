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
    const tableRow = document.getElementById("petRows");

    let row = "";
    
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        row+=`
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
            </tr>
            `
    }
    //HTML template for the cards

    //insert the card into the HTML div
    tableRow.innerHTML = row;
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
            document.getElementById("totalBirds").innerHTML = bird;
        }
        if(pet.type.toLowerCase() == "girafe") {
            girafe++;
            document.getElementById("totalGirafes").innerHTML = girafe;
        }
        if(pet.type.toLowerCase() == "dog") {
            dog++;
            document.getElementById("totalDogs").innerHTML = dog;
        }
        if(pet.type.toLowerCase() == "racoon") {
            racoon++;
            document.getElementById("totalRacoons").innerHTML = racoon;
        }
    }
}

function displayServiceCount() {
    //declare the variable 
    let grooming = 0;
    let vaccines = 0;
    let nails = 0;
    //travel the array
    for (let i = 0; i < petSalon.pets.length; i++) {
        //getthe current pet
        let pet = petSalon.pets[i];
        if (pet.service.toLowerCase() == "grooming") {
            grooming++;
            document.getElementById("totalGroomings").innerHTML = grooming;
        }
        if (pet.service.toLowerCase() == "vaccines") {
            vaccines++;
            document.getElementById("totalVaccines").innerHTML = vaccines;
        }
        if (pet.service.toLowerCase() == "nails") {
            nails++;
            document.getElementById("totalNails").innerHTML = vaccines;
        }
    }

    // if statments

    //increase the number of the grooming 
    //increase the number of nails
    //increase the number of vaccines
}