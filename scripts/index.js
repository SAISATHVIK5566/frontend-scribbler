var create_PostModal = document.getElementById("create_PostModal");

// code for  create post button
var createPostButton = document.getElementById("createPostButton");

// code for  close button
var clsCreatePost = document.getElementById("clsCreatePost");

// code to open the modal
openModal = modal => {
    modal.style.display = "block";
};

// code  to Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

//code to Add events to the buttons
createPostButton.addEventListener("click", () => openModal(create_PostModal));
clsCreatePost.addEventListener("click", () => closeModal(create_PostModal));

window.addEventListener("click", function(event) {
    if (event.target == create_PostModal) {
        create_PostModal.style.display = "none";
    }
});