function validateForm() {
  var name = document.getElementById("floatingName").value;
  var email = document.getElementById("floatingEmail").value;
  var message = document.getElementById("floatingTextarea").value;

  var isValid = true;

  // Name validation
  var nameRegex = /^[A-Z][a-z]{2,}$/;
  if (!nameRegex.test(name)) {
      document.getElementById("name-error").innerHTML = "Name must start with an uppercase letter followed by lowercase letters and be at least 3 characters long";
      isValid = false;
  } else {
      document.getElementById("name-error").innerHTML = "";
  }
  var email_pattern = /^[a-zA-Z0-9_.+-]+@(?:gmail\.com|yahoo\.com|outlook\.com|aol\.io)$/i;
  
  if (!email_pattern.test(email)) {
      document.getElementById("email-error").innerHTML = "enter a valid email";
      isValid = false;
  } else {
      document.getElementById("name-error").innerHTML = "";
  }
  var message_pattern = /^[A-Za-z]{2,500}$/;
  if(!message_pattern.test(message)) {
    document.getElementById("message-error").innerHTML = "please enter only letters or keep length  under 500 characters.";
    isValid = false;
  }


 else{
    document.getElementById("name-error").innerHTML = "";
}


return isValid;
}
function displayCost() {
    const roomType = document.getElementById('roomType');
    const roomCost = document.getElementById('roomCost');
    const selectedOption = roomType.options[roomType.selectedIndex];
    const cost = selectedOption.dataset.cost;
    roomCost.value = cost ? `₹ ${cost}` : '';
}
