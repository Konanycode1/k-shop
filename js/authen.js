let userUtil = document.getElementById('userUtil')
let icon = '<i class="fa fa-user-circle-o" style="font-size:25px"></i>'

function  verification() {
    localStorage.getItem('user');
    if(localStorage.getItem('user') === null){
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
        });
        
    }
    
}
verification();