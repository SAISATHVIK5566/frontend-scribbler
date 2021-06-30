var create_post_modal = document.getElementById("create_post_modal");

// code for  create post button
var create_post_button = document.getElementById("create_post_button");

// code for  close button
var cls_create_post = document.getElementById("cls_create_post");

// code to open the modal
openModal = modal => {
    modal.style.display = "block";
};

// code  to Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

//code to Add events to the buttons
createPostButton.addEventListener("click", () => openModal(create_post_modal));
clsCreatePost.addEventListener("click", () => closeModal(create_post_modal));

window.addEventListener("click", function(event) {
    if (event.target == create_post_modal) {
        create_post_modal.style.display = "none";
    }
});