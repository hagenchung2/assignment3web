// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p>
//element that reads "Thank you for your message" in size 24 font.

let submit = document.getElementById("submit-button");
let mainContact = document.getElementById("contact-page");
function Fgooddog() {
    mainContact.innerHTML = "Thank you for your message";
    mainContact.style.fontSize = "24px";
}
submit.addEventListener("click", Fgooddog);
// hint: you can change the style of an element by modifying the value of
//that element's .style.fontSize, or by updating its .classList.
