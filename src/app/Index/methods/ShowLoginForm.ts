export const ShowLoginForm = (open: boolean) => {
  let element = document.getElementsByClassName(
    "login-modal animate__animated animate__fadeIn"
  ) as HTMLCollectionOf<HTMLElement>;
  if (element[0] != null) {
    if (open) {
      element[0].style.visibility = "visible";
      element[0].style.opacity = "1";
    } else {
      element[0].style.visibility = "hidden";
      element[0].style.opacity = "0";
    }
  }
};
