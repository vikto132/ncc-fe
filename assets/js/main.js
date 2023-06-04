function getSidebar() {
  return document.getElementById("sidebar");
}
function sidebarToggle() {
  const el = getSidebar();
  if (el) {
    el.parentElement.classList.toggle("active");
  }
}
document.addEventListener("click", function (event) {
  const sidebarParent = getSidebar().parentElement;
  if (!sidebarParent.contains(event.target)) {
    sidebarParent.classList.remove("active");
  }
});
