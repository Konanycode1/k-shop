document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    let slides = document.querySelectorAll(".slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);

    let icoclick = document.querySelectorAll(".fa-heart-o");
    let icon = document.getElementById("icoclick");
    icoclick.forEach((clic) =>
      clic.addEventListener("click", (e) => {
        clic.classList.toggle("IconColor");
      })
    );
  }
});
