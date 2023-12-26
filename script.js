function toggleFirst() {
  const TOGGLE_ICON_GROUP1 = document.getElementById("icon1-group1");

  TOGGLE_ICON_GROUP1.addEventListener("mouseover", activeFirst, false);

  function activeFirst() {
    const WRAPPER = document.querySelector(".feature1");

    WRAPPER.classList.toggle("active");
    document.getElementById("ul1").classList.toggle("active");
  }
}

function toggleSecond() {
  const TOGGLE_ICON_GROUP2 = document.getElementById("icon1-group2");

  TOGGLE_ICON_GROUP2.addEventListener("mouseover", activeSecond, false);

  function activeSecond() {
    const WRAPPER = document.querySelector(".feature2");

    WRAPPER.classList.toggle("active");
    document.getElementById("ul2").classList.toggle("active");
  }
}

toggleFirst();

toggleSecond();
