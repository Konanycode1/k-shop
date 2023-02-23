// insertion à la base de donnée
document.addEventListener("DOMContentLoaded", () => {
  let formSign = document.getElementById("formsSign");
  const nomPrenom = document.getElementById("nomPrenom");
  const tel = document.getElementById("tel");
  const email = document.getElementById("email");
  const mdp = document.getElementById("mdp");
  let btn = document.getElementById("send");
  let deco = document.getElementById("deco");
  function setItem(cle, data) {
    localStorage.setItem(cle, data);
  }
  function getItem(cle) {
    return localStorage.getItem(cle);
  }
  formSign.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  btn.addEventListener("click", () => {
    if (
      nomPrenom.value === "" ||
      tel.value === "" ||
      email.value === "" ||
      mdp.value === ""
    ) {
      alert("Veuillez verifier tout vos champs SVP!!! ");
    } else {
      let identificate = {
        nomPrenom: nomPrenom.value,
        tel: tel.value,
        email: email.value,
        mdp: mdp.value,
      };
      let recup = getItem("user");
      let isFount = false;
      if (mdp.value.length < 8) {
        alert("Mot de passe trop court");
      } else {
        if (recup === null) {
          recup = [];
          recup.push(identificate);
          setItem("user", JSON.stringify(recup));
          isFount = true;
        } else {
          recup = JSON.parse(recup);
          recup.push(identificate);
          setItem("user", JSON.stringify(recup));
          isFount = true;
        }
      }
      if (isFount === true) {
        nomPrenom.value = "";
        tel.value = "";
        email.value = "";
        mdp.value = "";
        window.location.href = "login.html";
        
      }
    }
  });

  
 


});
