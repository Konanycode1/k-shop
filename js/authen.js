let userUtil = document.getElementById('userUtil')
let icon = '<i class="fa fa-user-circle-o" style="font-size:25px"></i>'
let deco = document.getElementById("deco")

function  verification() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    console.log(user)
    if(user != null ){
        user.forEach(cle => {
            if(user === null){
                userUtil.textContent=  "connexion";
                userUtil.addEventListener("click", ()=>{
                    window.location.href ='./page/login.html';
                    
                })
            }
            else{
                data = localStorage.getItem('user');
                data = JSON.parse(data);
                data.forEach(element => {
                    userUtil.textContent = element.nomPrenom;
                    deco.style.opacity = 1;
                }); 
            }  
        }) 
    }
    else{
        deco.style.opacity = 0;
    }
     
}
verification();

