function ejercicio1(string){
    var regEx=/\(*.\)/;
    console.log(string);
    var c=string.length;
    for(var i=0;i<c;i++){
        if(string[i]!="(" && string[i]!=")"){
            string = string.split(string[i]).join('r')
        }
        
    }
    string=string.replace(/r/g,'');
    aux=string.match(regEx);
    return (aux==string);

}
ejercicio1("abc(abc(abcdee)abc)abc");