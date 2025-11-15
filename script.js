const farol = document.getElementById("lanterna");

function freio(){
    farol.src= "freio.png";
}

function re(){
    farol.src = "re.png";
}

function desligado(){
    farol.src= "desligado.png";
}

function setaEsquerda(){
    farol.src= "setaEsquerda.png";
}

function setaDireita(){
    farol.src= "setaDireita.png";
}


function autoEsquerda(){
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0) desligado();
        else if(estado === 1) setaEsquerda();
        estado = (estado + 1) % 2;
    }, 450)
}


function autoDireita(){
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0) desligado();
        else if(estado === 1) setaDireita();
        estado = (estado + 1) % 2;
    }, 450)
}

function parar(){
    clearInterval(intervalo);
    limpar();
}

btnFreio.onclick = freio;
btnRe.onclick = re;
btnDesligado.onclick = desligado;
btnSetaEsquerda.onclick = autoEsquerda;
btnSetaDireita.onclick = autoDireita;
btnParar.onclick = parar;