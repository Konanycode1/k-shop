//  connexion 
document.addEventListener("DOMContentLoaded", ()=>{
    let username = document.getElementById('username');
    let password = document.getElementById('mdp');
    let send = document.getElementById('send');
    let formsLog = document.getElementById('formsLog');
    let para = document.getElementById('para');
    let sessionLog = false;

    function getItem(cle) 
    {
       return localStorage.getItem(cle);   
    }

    formsLog.addEventListener("submit", (e)=>{
        e.preventDefault();
    })
    send.addEventListener("click", ()=>{
        valeur = getItem("user");
        if(valeur === null){
            window.location.href = 'signup.html';
        }
        let data = JSON.parse(valeur);
        data.forEach(clic => {
           
        if(username.value === clic.email){
           
            if(password.value === clic.mdp){
                window.location.href = '../index.html';
                sessionLog = true
            }
            else{
                
                para.textContent = "Mot de passe incorrect !!!"
            }
        }
        else{
            para.textContent = "Email incorrect!!!, Veuillez vérifier votre mail svp."
        } 
        });
    })


})