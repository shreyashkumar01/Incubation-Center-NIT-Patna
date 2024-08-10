import Swal from 'sweetalert2';

const IdeaJs = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

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

    const config = {
      Host: "smtp.elasticemail.com",
      Username: "ankurverma6670@gmail.com",
      Password: "B5F5A90594C14CD9034B3A8397012B3D90A0",
      To: "ankurverma6670@gmail.com",
      From: "ankurverma6670@gmail.com",
      Subject: subject.value,
      Body: bodyMessage,
    };

    if (window.Email) {
      console.log(config);
      window.Email.send(config)
        .then((message) => {
          if (message === "OK") {
            Swal.fire({
              title: 'Good job!',
              text: 'Message sent successfully!',
              icon: 'success',
              confirmButtonText: 'Cool'
            });
          } else {
            console.error("Failed to send email:", message);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to send email: ' + message,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          Swal.fire({
            title: 'Error!',
            text: 'Error sending email: ' + error.message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        });
    } else {
      console.error("Email service not available.");
      Swal.fire({
        title: 'Error!',
        text: 'Email service not available.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  function checkInputs() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
      if (item.value === "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      item.addEventListener("keyup", () => {
        if (item.value !== "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
    });

    if (email.value !== "") {
      checkEmail();
    }

    email.addEventListener("keyup", checkEmail);
  }

  function checkEmail() {
    const emailRegix = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegix)) {
      email.classList.add("error");
      email.parentElement.classList.add("error");

      errorTxtEmail.innerHTML = email.value !== "" ? "Enter a valid email address" : "Email Address can't be blank";
    } else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
  }

  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();
    form.reset();
  }
};

export default IdeaJs;
