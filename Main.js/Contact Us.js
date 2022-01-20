function envio(){ 
    let comt=document.getElementById("comentarios").value;
    let br=document.getElementById("nome").value
    if(br==""){
        alert("put your name into the box")
    }
    else{
        if(comt==""){
            window.open("./index.html")
        }
        else{
            alert("thank you for your comment")
            window.open("./index.html")
    }
    }
}
