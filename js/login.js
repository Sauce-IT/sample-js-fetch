const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  console.log(username, password);
  // const response = await fetch("http://localhost/eparkapi/login-user", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     user_email: username,
  //     user_password: password,
  //   }),
  // });
  // const myJson = await response.json();

  fetch("http://localhost/eparkapi/login-user", {
    method: "POST",
    body: JSON.stringify({
      user_email: username,
      user_password: password,
    }),
  }).then(async function (response) {
    const res = await response.json();
    if (res.status["remarks"] === "failed") {
      console.log("failed");
    } else {
      console.log(res);
      //   redirect
      // location.href = "registration.html";
    }
  });
});
