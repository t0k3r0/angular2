export const getPaises = async (idioma) => {
      const url = `https://restcountries.com/v3.1/lang/${idioma}`;
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      let paisesFormateados
    if(data!= null){
        paisesFormateados = data.map((pais) => ({
            nombre: pais.name.common,
            capital: pais.capital,
            poblacion: pais.population,
            continente: pais.continents[0],
            bandera: pais.flags.png,
          }));
    }else{
        paisesFormateados="No existe"
    }
      
  
      return paisesFormateados;
  };
  