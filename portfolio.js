let navigation = document.querySelector(".navigation ul");

navigation.addEventListener("click", (e) => {
  if (e.target.classList[0] == "bnav") {
    for (let notact of navigation.children) {
      notact.children[0].classList.remove("active")
    }
    e.target.classList.add("active")
  }
});