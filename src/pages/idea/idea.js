import { Email } from "./smtp";   

const IdeaJs = () => { 

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  console.log("sendEmail");
  const bodyMessage =
    `Full Name: ${fullName.value} <br>Email: ${email.value} <br>Phone Number: ${phone.value} <br>Subject: ${subject.value} <br>Message: ${message.value} <br>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "manikantaperniede400@gmail.com",
    Password: "858141DB8984847A9CD243B39933DE2E9FCB",
    To: "manikantaperneedi000@gmail.com",
    From: "manikantaperniede400@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  })
  .then((message) => {
    // if (message == "OK") {
    //   console.log("asda");
    //   Swal.fire({
    //     title: "Good job!",
    //     text: "Message sent SUCCESSFULLY!",
    //     icon: "success",
    //   });
    // }
    alert("mail sent successfully");
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegix = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegix)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerHTML = "Enter a valid email address";
    } else {
      errorTxtEmail.innerHTML = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
 
}

form.addEventListener("submit", (e) => {
  console.log("clicked");
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("errors") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    // console.log("ok");
    sendEmail();

    form.reset();
    return false;
  }
});

}

export default IdeaJs;