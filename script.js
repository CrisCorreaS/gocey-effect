function toggle() {
  const TOGGLE_ICON = document.querySelector(".ico01");

  TOGGLE_ICON.addEventListener("mouseover", active, false);

  function active() {
    const WRAPPER = document.querySelector(".wrapper");

    WRAPPER.classList.toggle("active");
  }
}

toggle();
