document.querySelector("#open-popup").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
  });
  
  document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
  });
  document.getElementById("view-cv-button").addEventListener("click", function() {
    window.open("./assets/files/K G SHREYA_2025.pdf", "_blank");
  });