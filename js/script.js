document.addEventListener("DOMContentLoaded", () => {
  let scrollleft = document.getElementById("scrollleft");
  let cardElement = document.getElementById("scrollElement");
  let scrollright = document.getElementById("scrollright");
  let position = 0;

  scrollleft.addEventListener("click", (e) => {
    e.preventDefault();
    position = cardElement.scrollX;
    cardElement.scroll(0, position);
  });

  scrollright.addEventListener("click", (e) => {
    e.preventDefault();
    position = cardElement.scrollX;
    cardElement.scroll(position, 1000);
  });

  let icoclick = document.querySelectorAll(".fa-heart-o");
  let icon = document.getElementById("icoclick");
  icoclick.forEach((clic) =>
    clic.addEventListener("click", (e) => {
      clic.classList.toggle("IconColor");
    })
  );
   

});

// function  changIcon() {
//     icoclick.color = '#F96E3F';
//     icoclick.map()
// }
