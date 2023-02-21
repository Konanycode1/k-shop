 // insertion à la base de donnée
document.addEventListener("DOMContentLoaded", ()=>{
    let formSign =  document.getElementById('formsSign');
    const nomPrenom = document.getElementById('nomPrenom');
    const tel = document.getElementById('tel');
    const email= document.getElementById('email');
    const mdp = document.getElementById('mdp');
    let btn = document.getElementById('btn');
    
    function setItem(cle, data) 
    {
     localStorage.setItem(cle, data);   
    }
    function getItem(cle) 
    {
       return localStorage.getItem(cle);   
    }
    formSign.addEventListener("submit", (e)=>{
      e.preventDefault();
    });
    btn.addEventListener("click", ()=>{
      let identificate = {
       nomPrenom: nomPrenom.value,
       tel: tel.value,
       email: email.value,
       mdp: mdp.value
      }
      let isFount = false;
      identificate = JSON.stringify(identificate);
      if (mdp.value.length < 8 ){
       alert('Mot de passe trop court');
      }
      else{
           let verif= setItem('user', identificate);
           isFount = true;   
      }
      if (isFount === true){
            nomPrenom.value = "";
            tel.value = "";
            email.value = "";
            mdp.value = ""
            window.location.href = 'login.html';
      }
    });
})

