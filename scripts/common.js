// Search for the modals
var signUpModal = document.getElementById("signup_modal");
var signInModal = document.getElementById("signin_modal");

// Search for the button to open modals
var signUpBtn = document.getElementById("signup_button");
var signInBtn = document.getElementById("signin_button");
var signUpLink = document.getElementById("signup_link");

// Search the button to close modal
var closeSignUp = document.getElementById("close_signup");
var closeSignIn = document.getElementById("close_signin");

//Open the modal
openModal = modal => {
    modal.style.display = "block";
};

//Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

// Event to handle the click on Signin/signup buttons
signInBtn.addEventListener("click", () => openModal(signin_modal));
signUpBtn.addEventListener("click", () => openModal(signup_modal));

// Event to handle close button
closeSignUp.addEventListener("click", () => closeModal(signup_modal));
closeSignIn.addEventListener("click", () => closeModal(signin_modal));

// Event to handle the click on outer area which closes the modal
window.addEventListener("click", function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
});


//Handling the link inside the sign in modal
signUpLink.onclick = function() {
    closeModal(signInModal);
    openModal(signUpModal);
};