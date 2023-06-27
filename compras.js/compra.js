function camisas(){
let  numeros = parseFloat(document.getElementById ("numberInput").value)
let respuesta = document.getElementById("resultado")


if(numeros > 5 ){

    respuesta.textContent = " el usuario tiene que pagar con tarjeta" 
}
else{

    respuesta.textContent = " el usuario paga en efectivo"
}
}