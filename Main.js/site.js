function iniciaSlider(){
    max=3;
    min=1;
    fi=min;
    tr=true;
    carregaFoto("./Fotos/f1.jpg")
    document.getElementById("slide").addEventListener ("transitionend",fimTr);
}
function fimTr(){
    tr=true;
}

function carregaFoto(foto){
    document.getElementById("slide").style.backgroundImage="URL("+foto+")";
}

function prox(){
    if(tr){
        tr=false
        fi++;
        if(fi>max){
            fi=min;
        }
        carregaFoto("./Fotos/"+"f"+fi+".jpg");
    }
}
function ante(){
    if(tr){
        tr=false
        fi--;
        if(fi<min){
            fi=max;
        }
    carregaFoto("./Fotos/"+"f"+fi+".jpg");
    }
}