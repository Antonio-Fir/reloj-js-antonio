const getHour = () => {
    const fecha = new Date();

    let tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundos: fecha.getSeconds(),
        dia: fecha.getDay(),
        mes: fecha.getMonth(),
        año: fecha.getFullYear()
    }
    // console.log(tiempo.hora);

    let horaActual = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundos}`;
    document.querySelector(".reloj").innerHTML = horaActual;

    let fechaActual = `${tiempo.dia} / ${tiempo.mes} / ${tiempo.año}`;
    document.querySelector(".fecha").innerHTML = fechaActual;
}

// getHour();
setInterval(getHour, 1000);