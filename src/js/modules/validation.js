export const isValid = () => {
  const form = document.querySelector("form");
  const btnRecall = form.querySelector("button");
  const items = document.querySelectorAll(".order__input");
  const regEmail = /^\S+@\S+\.\S+$/;
  const regPhone = /^\d+$/;

  btnRecall.disabled = true;
  items.forEach((item) => {
    item.addEventListener("change", function () {
      switch (item.name) {
        case "name":
          item.value.length < 2
            ? (item.parentNode.classList.add("order__input-error"),
              (btnRecall.disabled = true))
            : (item.parentNode.classList.remove("order__input-error"),
              (btnRecall.disabled = false));
          break;
        case "email":
          !regEmail.test(item.value)
            ? (item.parentNode.classList.add("order__input-error"),
              (btnRecall.disabled = true))
            : (item.parentNode.classList.remove("order__input-error"),
              (btnRecall.disabled = false));
          break;
        case "phone":
          !regPhone.test(item.value)
            ? (item.parentNode.classList.add("order__input-error"),
              (btnRecall.disabled = true))
            : (item.parentNode.classList.remove("order__input-error"),
              (btnRecall.disabled = false));
          break;
        case "text":
          item.value.length < 15
            ? (item.parentNode.classList.add("order__input-error"),
              (btnRecall.disabled = true))
            : (item.parentNode.classList.remove("order__input-error"),
              (btnRecall.disabled = false));
      }
    });
  });
};

isValid();
