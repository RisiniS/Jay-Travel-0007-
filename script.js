$(document).ready(function() {
    $("#contactForm").submit(function(event) {
        event.preventDefault(); 

        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        
        if (firstName === "" || lastName === "" || email === "" || phone === "") {
            alert("All fields are required!");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Invalid email format!");
            return;
        }

        let phonePattern = /^[0-9]{10}$/;
        if (!phone.match(phonePattern)) {
            alert("Invalid phone number! Enter 10 digits.");
            return;
        }

        alert("Form submitted successfully!");
        $("#contactForm")[0].reset();
    });
});
