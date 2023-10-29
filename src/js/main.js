import { modal, openModal } from "./modules/modal";
import { timer } from "./modules/timer";
import { forms } from "./modules/form";
import { isValid } from "./modules/validation";
window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    60000
  );
  timer(".timer", "2023-12-12");
  modal("[data-modal]", ".modal", modalTimerId);
  forms("form", modalTimerId);
  isValid();
});
