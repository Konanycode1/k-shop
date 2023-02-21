 // insertion à la base de donnée

 let formSign =  document.getElementById('formsSign');
 const nomPrenom = document.getElementById('nomPrenom');
 const tel = document.getElementById('tel');
 const email= document.getElementById('email');
 const mdp = document.getElementById('mdp');
 let btn = document.getElementById('btn');
 
 formSign.addEventListener("submit", (e)=>{
   e.preventDefault();
 });
 btn.addEventListener("click", ()=>{
   let identificate = {
    nomPrenon: nomPrenom.value,
    tel: tel.value,
    email: email.value,
    mdp: mdp.value
   }
   identificate = JSON.stringify(identificate);
   if (mdp.value.length < 8 ){
    alert('Mot de passe trop court');
   }

   console.log(identificate);
 });