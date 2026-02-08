document.getElementById("button").onclick=function(e){

    e.preventDefault(e);
    
    let username = document.getElementById("username").value ;
    let password = document.getElementById("password").value ;

    if(username==="admin"&& password==="123456"){
        window.location.href ="https://github.com/"
    }
    // else if(username==="innocent"&& password==="123456"){
    //     window.location.href = "https://www.dota2.com/hero/zeus";
    // }
};






// let username="erfan"
// let password="123456"
// document.getElementById("button").onclick=
// if(username.value = "erfan"&& password.value = "123456")function(){
//     window.location.href = "https://digikala.com/"
// }



// document.getElementById("button").onclick = function(){
//     var username = document.getElementById("username").value ;
//     window.location.href = "https://digikala.com/"
// };