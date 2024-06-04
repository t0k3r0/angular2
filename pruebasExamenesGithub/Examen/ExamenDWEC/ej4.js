function ejercicio4(filas,columnas,color,container){
    var tabla=document.createElement("table");
    for(var i=0; i<filas;i++){
        var tr=document.createElement("tr");
        for(var j=0; j<columnas;j++){
            let text=document.createTextNode("Examen");
            let td=document.createElement("td");
            td.append(text);
            td.onclick=function(){borrar(td)};
            tr.append(td);
        }
        if(i%2==0){tr.style.backgroundColor=color}
        tabla.append(tr);
    }
    document.body.append(tabla);
    localStorage.setItem("tabla",tabla);
}

function borrar(td){
    td.innerText="";
    localStorage.setItem("tabla",tabla);
}