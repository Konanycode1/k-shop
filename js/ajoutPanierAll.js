document.addEventListener("DOMContentLoaded", () => {
  let icoClick = document.querySelectorAll(".fa-cart-plus");
  let username = localStorage.getItem("user");
  let user = document.getElementById("userUtil");
  let nombre = document.getElementById("nombre");
  let categorie = "beauté";

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

  function ajouteNewCosme() {
    if (user.textContent === username.nomPrenom) {
      icoClick.forEach((clic) =>
        clic.addEventListener("click", (e) => {
          let parent = clic.closest(".allcard");
          let nomprod = parent.querySelector(".infopr");
          let prix = parent.querySelector(".prix");
          //   let cate = parent.querySelector(".infoListPro p");
          let donnee = [];

          let data = {
            nomprod: nomprod.textContent,
            prix: prix.textContent,
            cate: categorie,
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
            recup = JSON.parse(recup)
            recup.push(data);
            setItem("valeur", JSON.stringify(recup));
            isPass = true;
            recuperation();
          }
          // data.push(clic);
        })
      );
      // console.log(nombreAjou)
    } else {
      console.log("utilisateur incorrecte");
    }
  }
  ajouteNewCosme();


  
});
