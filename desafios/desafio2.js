function ingreso(){
    let continua;
    let digitalTransform = 100;
    let SEO = 200;
    let SEM = 300;
    let valorFinal;
    while(continua != false){
        alert("Los servivos disponibles son:" + "\n" +
                "1- Digital transform" + "\n" +
                "2- SEO" + "\n" +
                "3- SEM" );
        let servicio = parseInt(prompt("Ingrese el servicio que desea:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad"));
        switch(servicio){
            case 1:
                valorFinal = digitalTransform * cantidad;
                alert("Elijio el servicio de 'Digital transform" + "\n" +
                        "y tiene que abonar un total de " + valorFinal + " dolares");
                break;
            case 2:
                valorFinal = SEO * cantidad;
                alert("Elijio el servicio de 'SEO" + "\n" +
                        "y tiene que abonar un total de " + valorFinal + " dolares");
                break;
            case 3:
                valorFinal = SEM * cantidad;
                alert("Elijio el servicio de 'SEM" + "\n" +
                        "y tiene que abonar un total de " + valorFinal + " dolares");
                break;
        }
        continua = confirm("¿Desea agregar otro servicio?");
    }
    return "Gracias por su compra!";
}

alert(ingreso());
