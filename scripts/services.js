let services = {
    service: []
};

//constructor
function Service(service, price) {
    this.service=service;
    this.price=price;
}
//validations
function isValid(service) {

    let validation = true;

    if (service.service=="") {
        validation = false;
        showNotification("Please add a service", "error");
    } 
    if (service.price=="") {
        validation = false;
        showNotification("Please enter a price", "error");
    }

    return validation;
}
//register function
function register() {
    let inputService = document.getElementById("txtService").value;
    let inputPrice = document.getElementById("txtPrice").value;

    let newService = new Service(inputService, inputPrice);

    if (isValid(newService) == true) {
        services.service.push(newService);
        showNotification("Successfully registered", "success");
    }
    clearForm();
}

function clearForm(){
    document.getElementById("txtService").value="";
    document.getElementById("txtPrice").value="";
}
//use notification

//clear the form