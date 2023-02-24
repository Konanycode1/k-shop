document.addEventListener("DOMContentLoaded", () => {
  let icoClick = document.querySelectorAll(".fa-cart-plus");
  let username = localStorage.getItem("user");
  
  let user = document.getElementById("userUtil");
  let nombre = document.getElementById("nombre");

  //   let panier = document.getElementById("panier");

  username = JSON.parse(username);
 
  let isPass = false;
  let data = [];

  function setItem(cle, valeur) {
    localStorage.setItem(cle, valeur);
  }

  function getItem(cle) {
    return localStorage.getItem(cle);
  }

  function recuperation() {
    let listePanier = localStorage.getItem("valeur");
    listePanier = JSON.parse(listePanier);
    if (listePanier === null) {
      return (nombre.textContent = 0);
    }
    return (nombre.textContent = listePanier?.length);
  }
  recuperation();

      icoClick.forEach((clic) =>
        clic.addEventListener("click", (e) => {
          let parent = clic.closest(".cardList");
          let nomprod = parent.querySelector(".nomProd");
          let prix = parent.querySelector(".price");
          let cate = parent.querySelector(".infoListPro p");
          let donnee = [];
  
          let data = {
            nomprod: nomprod.textContent,
            prix: prix.textContent,
            cate: cate.textContent,
          };
          console.log(data)
          let recup = getItem("valeur");
          if (recup === null) {
            recup = [];
            recup.push(data);
            setItem("valeur", JSON.stringify(recup));
            isPass = true;
            recuperation();
          } else {
            recup = JSON.parse(recup);
            recup.push(data);
            setItem("valeur", JSON.stringify(recup));
            isPass = true;
            recuperation();
          }
          // data.push(clic);
        })
      );
      



  
  //   valeur = getItem("valeur");
  //   valeur = JSON.parse(valeur);
  //   nombre.innerHTML = valeur.length;
});
