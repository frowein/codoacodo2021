var edad = Number(prompt('Ingrese su edad: '))
if (edad >= 18){
    alert('El usuario es mayor de edad.')
}else{
    alert('El usuario no es mayor de edad.')
}

var mayor = 0;
var nombredelmayor

for(var i=0;i<3;i++){
    var nombre = prompt('Ingrese el nombre: ')
    var edad = Number(prompt('Ingrese la edad:'))
    if(edad > mayor){
        mayor = edad
        nombredelmayor = nombre
    }
}

alert(nombredelmayor + ' es el mayor de los 3 y tiene ' + mayor + ' años de edad.')