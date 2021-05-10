const form = document.querySelector(".content__form");
const email = form.querySelector("input[type=email]");
const label = form.querySelector(".content__form--field-label");
const iconError = form.querySelector(".content__form--field-error");
const submitButton = form.querySelector("button[type=submit]");

submitButton.addEventListener("click", function () {
  // console.log(email.value);
  let state = checkEmail(email.value);
  if (state) {
    label.classList.add("hide");
    iconError.classList.add("hide");
    alert("validation complete");
  } else {
    label.classList.remove("hide");
    iconError.classList.remove("hide");
    label.focus();
  }
});

// 이메일이 잘못되었는지 확인하는 함수

function checkEmail(str) {
  let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}
