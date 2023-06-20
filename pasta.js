var peso = Number (prompt("Digite seu peso"));
var altura = Number (prompt("Digite sua altura"));
var imc = peso / (altura**2);

alert("Seu imc é: " + imc);

if(imc<17){
    alert("Muito abaixo do peso");
}else if(imc>17 && imc<=18.49){
    alert("Abaixo do peso");
}else if(imc>18,5 && imc<=24.99){
    alert("Peso normal");
}else if(imc>25 && imc<=29.99){
        alert("Acima do peso");
}else if (imc>30 && imc<=34.99){
    alert("Obesidade I");
}else if (imc>35 && imc<=39.99){
    alert("Obesidade II");
}else if (imc>40) {
    alert("Obesidade III");
}

    




    
