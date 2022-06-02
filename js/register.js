const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");

registerButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const mobile = registerForm.mobile.value;
  const password = registerForm.password.value;

  console.log(name, email, mobile, password);

  fetch("http://localhost/eparkapi/register-user", {
    method: "POST",
    body: JSON.stringify({
      user_name: name,
      user_email: email,
      user_mobile: mobile,
      user_password: password,
    }),
  }).then(async function (response) {
    const res = await response.json();
    if (res.status["remarks"] === "failed") {
      console.log("failed");
    } else {
      console.log(res);
      //   redirect
      //   location.href = "login.html";
    }
  });
});
