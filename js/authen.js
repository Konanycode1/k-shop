let userUtil = document.getElementById('userUtil')
// let deco = document.getElementById("deco")
let icon = '<i class="fa fa-user-circle-o" style="font-size:25px"></i>'
let deco = document.getElementById("deco");
const url = window.location.href;
console.log(url.split('/'))
function  verification() {
    let user = localStorage.getItem('user');
    let  session = localStorage.getItem('seesionShop')
    if(session == null){
        window.location.href = './login.html'
    }
    user = JSON.parse(user);
    if(user !== null ){     
        data = localStorage.getItem('user');
        data = JSON.parse(data);
        data?.forEach(element => {
        userUtil.textContent = element.nomPrenom;
        deco.style.opacity = 1;
                }); 
    }
    else{
        userUtil.textContent=  "connexion";
        userUtil.addEventListener("click", ()=>{
        window.location.href ='./page/login.html';})
        deco.style.display = 'none';
    }
     
}
verification();


deco.addEventListener('click', ()=>{
    localStorage.removeItem("seesionShop")
    window.location.href = './page/login.html'
})
