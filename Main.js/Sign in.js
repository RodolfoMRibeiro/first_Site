function registro() 
{ 
    let username = document.getElementById("name").value
    let Nickname = document.getElementById("apelido").value
    let senha1= document.getElementById("pass").value
    let senha2=document.getElementById("pass2").value
    let mail=document.getElementById("email").value
    
    if(username=="" | mail==""){
        alert(`You need to tell us your Name or Email adress`)
    }
    else{
        if(senha1==senha2 & senha1!=""){
            if(Nickname!=""){
                alert(`Hey ${username} (${Nickname}), your account has been created, please check the news`)
                window.open('../index.html')
            } else{
                alert(`Hey ${username}, your account has been created, please check the news`)
                window.open('../index.html')
            }
        } else{
            alert(`Please, check your password`)
        }
    }
    
}


