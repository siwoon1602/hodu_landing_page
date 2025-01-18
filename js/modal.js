const modal = document.querySelector(".subsrive_modal_button");
const onModal = document.querySelector(".modal");
const subsriveText = document.querySelector(".subsribe_email");
const offModal = document.querySelector(".modal_off");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

modal.addEventListener("click", () => {
  const inputValue = subsriveText.value.trim();
  if (!inputValue || !emailRegex.test(inputValue)) {
    console.log("올바른 이메일 형식으로 입력해주세요");
    return;
  }
  onModal.showModal();
  subsriveText.value = "";
});

offModal.addEventListener("click", () => {
  onModal.close();
});
