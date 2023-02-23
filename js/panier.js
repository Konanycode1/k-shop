function getItem(cle) {
  return localStorage.getItem(cle);
}
let bot = document.getElementById("bot");
let val = document.getElementById("customers");
valeur = getItem("valeur");
valeur = JSON.parse(valeur);
if(valeur === null){
  nombre.innerHTML = 0;
}
else{
  nombre.innerHTML = valeur?.length;
  
}


let i;
for (i = 0; i <= valeur.length; i++) {
  // if( valeur[i].nomprod ===  valeur[i].nomprod){
  //   let nombreNom = valeur[i].nomprod.length;
  //   console.log(nombreNom)
  // }
  let text = `
    <tr>
    <td> ${valeur[i].nomprod}</td>
    <td>${valeur[i].prix}</td>
    <td> ${valeur[i].cate}</td>
    <td> <button type="submit" style="background-color:#f96e3f; color:white; width:100px; height:30px; border:none;">Supprimer</button> <button type="submit" style="background-color:green; color:white; width:100px; height:30px; border:none;">Conserver</button></td>
    </tr>`;
    val.innerHTML += text;
   bot.style.opacity = 1
}

