var nombre = prompt('Ingrese un nombre')
var nota1 = Number(prompt('Ingrese la primer nota'))
var nota2 = Number(prompt('Ingrese la segunda nota'))
var nota3 = Number(prompt('Ingrese la tercera nota'))
var promedio = (nota1 + nota2 + nota3) / 3
alert('El promedio del alumno ' + nombre+ ' es de: ' + promedio.toFixed(2))