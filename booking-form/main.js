var hotels = ["Da Nang", "Sai Gon", "Ha Noi"];
var dayRates = [1000, 900, 800];
var i = 0;

function validateForm() {
    var firstname = document.forms["hotelForm"]["firstname"].value;
    var lastname = document.forms["hotelForm"]["lastname"].value;
    var days = document.forms["hotelForm"]["days"].value;

    if (firstname == "") {
        alert("First name must be filled out");
        return false;
    } else if (lastname == "") {
        alert("Last name must be filled out");
        return false;
    } else if (days < 1) {
        alert("Number of days must be greater than 0");
        return false;
    }
}

function displayHotelAndDayRate(x) {
        document.getElementById('hotels').innerHTML = hotels[x] + ' Hotel ' + dayRates[x] + ' per night, pps';
        
    i = x;
}

function displaySelectionAndPrice() {

    var person = {
        firstName: document.forms["hotelForm"]["firstname"].value,
        lastName: document.forms["hotelForm"]["lastname"].value,   
    }

    var days = document.forms["hotelForm"]["days"].value;
    var total = dayRates[i] * days;

    document.getElementById('test').innerHTML =
    "Congratulations " + person['firstName'] + " " + person['lastName'] + " !! <br> You are booking " + hotels[i] + 
    " Hotel. <br> Number of days: " + days + " <br>Daily Rate: R" + dayRates[i] + "pps <br>Total: " + total +
    '   <button type="button" class="btn-outline-secondary float-right" onclick = "redirectToCheckout()"> Go to Checkout </button>';
}

function redirectToCheckout(){
    window.location.href = 'http://127.0.0.1:5502/Payment/index.html?#';
}