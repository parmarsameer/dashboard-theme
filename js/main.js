const desktopProfile = document.getElementById("desktop-profile");
function profileButtonCLicked() {
  console.log("hey");

  const profile = document.getElementById("profile");
  console.log(profile);
  profile.classList.toggle("showprofile");
}

desktopProfile.addEventListener("click", function () {
  const profile = document.getElementById("profile");
  profile.style.display = "none";
});
