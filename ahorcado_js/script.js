var vidas = 6
const palabras = ['ahorcado','juego','programacion','javascript','curso','argentina','celular','series','television','cocina','hospital','creaciones','futbol','comentario','internet','monumento','cantar','saltar','correr','termo','hechizo','otorrinolaringologo','magia','instituto','universidad','auto','colectivo','supermercado','eclipse','oportunidad','procesador','cancion']
var palabra = palabras[Math.floor(Math.random() * palabras.length)] //seleccion al azar de la letra
var seleccionada = palabra.split("") //palabra dividida en un array de caracteres
var completar = [] //palabra a completar

rellenar()

while (vidas > 0 && !completa()){
    var ingreso = prompt('Ingrese una letra: ')
    verificarletra(ingreso)
    if(vidas == 0){
        alert('Sin vidas restantes. GAME OVER')
    }else if(completa()){
        alert('Felicidades completaste la palabra: ' + imprimir() + '. YOU WIN')
    }
}

function rellenar(){
    for(var i = 0; i < seleccionada.length; i++){
        completar[i] = '-'
    }
}

function completa (){ //funcion para ver si la palabra ya fue completada
    var incompleto = 0 
    for (var i = 0; i < completar.length; i++){
        if(completar[i] == '-'){
            incompleto++
        }
    }
    if (incompleto == 0){ //si es igual a 0 entonces ya no hay mas letras que agregar
        return true //entonces la funcion "completa" retorna true porque ya esta completa
    }else{ 
        return false //sino retorna false porque todavia quedan letras por agregar
    }
}

function imprimir(){
    var imprimirpalabra = ""
    for (var i = 0; i < completar.length; i++){
        imprimirpalabra = imprimirpalabra + completar[i]
    }
    return imprimirpalabra
}

function verificarletra (ingreso){
    var cambios = 0
    for (var i = 0; i < seleccionada.length; i++){
        if(ingreso == seleccionada[i]){
            completar[i] = ingreso
            cambios++
        }
    }
    if (cambios == 0){
        vidas--
        alert('La letra ingresada NO es correcta. ' + imprimir() + ' ' + vidas + ' vidas restantes.')
    }else{
        alert('La letra ingresada es correcta. ' + imprimir() + ' ' + vidas + ' vidas restantes.')
    }
}