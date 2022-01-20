function registro(){
    let tname=document.getElementById("name").value
    let tpass=document.getElementById("pass").value
    if (tname=='' | tpass==''){
        alert('You need to inform your username or password')
    }
    else{
        alert('welcome')
        window.open('../index.html')
    }
}