function ejercicio2(arrayFechas,fechaInicio,fechaFin){
    var inicio=formatoIngles(fechaInicio);
    var final=formatoIngles(fechaFin);
    var fechas=[];
    var fechasDevolver=[];
    for(var i=0;i<arrayFechas.length;i++){
        fechas.push(formatoIngles(arrayFechas[i]));
    }
    for(var j=0;j<arrayFechas.length;j++){
        if(fechas[j]<=final && fechas[j]>=inicio){
            fechasDevolver.push(fechas[j]);
        }
    }
    return(convertirFecha(fechasDevolver));
}
function formatoIngles(fecha){
    fecha=fecha.split('/');
    var dia=parseInt(fecha[0]);
    var mes=parseInt(fecha[1]);
    mes--;
    var año=parseInt(fecha[2]);
    return(new Date(año,mes,dia));
}
function convertirFecha(fecha){
    var arr=[];
    for(var i=0;i<fecha.length;i++){
        var dia=fecha[i].getDay();
        var mes=fecha[i].getMonth();
        var año=fecha[i].getFullYear();
        arr.push(dia+"/"+mes+"/"+año);
    }
    return arr;
}
var arrayFechas=["05/7/2015","12/3/2013","04/3/2009","17/11/2016","12/3/2017","01/1/2014"];
ejercicio2(arrayFechas,"12/3/2013","12/3/2017")