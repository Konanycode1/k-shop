function getItem(cle) {
  return localStorage.getItem(cle);
}
valeur = getItem("valeur");
valeur = JSON.parse(valeur);
nombre.innerHTML = valeur?.length;
