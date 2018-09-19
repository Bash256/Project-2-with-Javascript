// Greeting alert
alert("Hi! Welcome to my page. Press ok to proceed:");

// Alert to confirm the user is human, log to save answers in the console and see which button is pressed more: ok or cancel.
if (confirm("Press a button to confirm you are not a robot:")) {
    console.log('Ok was pressed');
} else {
    console.log('Cancel was pressed');
}

// Age Limit Alert
var age = prompt("Please enter your age");

// blocks users under 18. I want to add code that closes the tab if the answer is < 18 but i couldnt do it. ('Window.close()'?)
if (age >= '18') {
    alert("Old Enough"); // if user is old enough, procceeds to identify if the user is eligable for access.
    
    var person = prompt("Please enter your name");

    if (person === 'Bashar') { // List of people allowed to access the website.
    alert("Welcome Page Developer");
    }
    else if (person === 'Max') {
    alert("Welcome Teacher");
    }
    else if (person === 'Sarah') {
    alert("Welcome Sarah");
    }
    else if (person === 'Vera') {
    alert("Welcome Vera");
    }
    else if (person === 'Kevin') {
    alert("Welcome Kevin");
    }

    else { // If the name is not one of the ones listed above then the following is produced. I want to add a code to close the tab.
    alert("Invalid Person");
    alert("Access Denied");
    }

} else { // If User is too young the following is produced. I want to add a code to close the tab.
    alert("Too Young!");
    alert("Access Denied");
}