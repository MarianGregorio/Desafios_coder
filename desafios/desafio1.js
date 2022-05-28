let n = parseInt(prompt("Ingrese un numero de empleados:"));
let cant1 = 0;
let cant2 = 0;
let suma = 0;
let i = 1;

while (i <= n){
    let sueldo = parseInt(prompt("Ingrese sueldo del empleado:"));
    if (sueldo >= 100 && sueldo <= 300){
        cant1 += 1;
    } else if (sueldo > 300){
        cant2 += 1;
    }
    suma += sueldo;
    i += 1;
}

alert("Los empleados que cobran mas de 300 son:" + cant2);
alert("Los empleados que cobran menos de 300 son:" + cant1);
alert("El importe total de la empresa es:" + suma);
