const modal = document.querySelector(".subsrive_modal_button");
const onModal = document.querySelector("dialog");
const subsriveText = document.querySelector(".subsribe_email");
const offModal = document.querySelector(".modal_off");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

modal.addEventListener("click", () => {
  const inputValue = subsriveText.value.trim();
  if (!inputValue || !emailRegex.test(inputValue)) {
    return;
  }
  modal.showModal();
});

offModal.addEventListener("click", () => {
  onModal.close();
});
