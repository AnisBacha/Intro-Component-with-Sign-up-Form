
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const button  = document.querySelector(".main__btn");

button.addEventListener("click" , (event) => {
    event.preventDefault();
    firstName.value === "" ? display(".main__firstNameError") : hide(".main__firstNameError");
    lastName.value === "" ? display(".main__lastNameError") : hide(".main__lastNameError");

    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailFormat.test(email.value) ? hide(".main__emailError") : display(".main__emailError") ;

    password.value ==="" ? passwordEmpty() : passwordFilled();
});



const display = (className) =>{
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
        element.style.display = "block";
    });
};
const hide = (className) => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
        element.style.display = "none";
    });
};

const passwordEmpty = () =>{
    button.style.marginBlockStart = "1.5rem";
    display(".main__passwordError");
}
const passwordFilled = () =>{
    button.style.marginBlockStart = "0rem";
    hide(".main__passwordError");
}