async function loadAndProcessExternalContent() {
    try {
        const divExterno = document.getElementById('externo');
        const response = await fetch('DWEC05.html');
        const text = await response.text();
        const divTemp = document.createElement('div');
        divTemp.innerHTML = text;
        // Eliminar todo el contenido de las etiquetas img y script
        const imgs = divTemp.getElementsByTagName('img');
        const enlaces = divTemp.getElementsByTagName('a');
       
        const scripts = divTemp.getElementsByTagName('script');
        for (let img of imgs) {
            while (img.attributes.length > 0) {
                img.removeAttribute(img.attributes[0].name);
            }
        }
        for (let a of enlaces) {
            while (a.attributes.length > 0) {
                a.removeAttribute(a.attributes[0].name);
            }
        }
        for (let script of scripts) {
            script.innerHTML = '';
        }
        const contenidoTexto = divTemp.innerText.toLowerCase();
        const palabrasFiltradas = contenidoTexto.split(/\s+/).filter(palabra => {
            const palabrasComunes = ['de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'del', 'se', 'las', 'por', 'un', 'para',
                'con', 'no', 'una', 'su', 'al', 'es', 'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya',
                'o', 'este', 'sí', 'porque', 'esta', 'entre', 'cuando', 'muy', 'sin', 'sobre', 'también',
                'me', 'hasta', 'hay', 'donde', 'quien', 'desde', 'todo', 'nos', 'durante', 'todos',
                'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos', 'e', 'esto',
                'mí', 'antes', 'algunos', 'qué', 'unos', 'yo', 'otro', 'otras', 'otra', 'él', 'tanto',
                'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos', 'cual', 'poco', 'ella', 'estar',
                'estas', 'algunas', 'algo', 'nosotros', 'mi', 'mis', 'tú', 'te', 'ti', 'tu', 'tus',
                'ellas', 'nosotras', 'vosotros', 'vosotras', 'os', 'mío', 'mía', 'míos', 'mías',
                'tuyo', 'tuya', 'tuyos', 'tuyas', 'suyo', 'suya', 'suyos', 'suyas', 'nuestro',
                'nuestra', 'nuestros', 'nuestras', 'vuestro', 'vuestra', 'vuestros', 'vuestras',
                'esos', 'esas', 'estoy', 'estás', 'está', 'estamos', 'estáis', 'están', 'esté',
                'estés', 'estemos', 'estéis', 'estén', 'estaré', 'estarás', 'estará', 'estaremos',
                'estaréis', 'estarán', 'estaría', 'estarías', 'estaríamos', 'estaríais', 'estarían',
                'estaba', 'estabas', 'estábamos', 'estabais', 'estaban', 'estuve', 'estuviste',
                'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron', 'estuviera', 'estuvieras',
                'estuviéramos', 'estuvierais', 'estuvieran', 'estuviese', 'estuvieses', 'estuviésemos',
                'estuvieseis', 'estuviesen', 'estando', 'estado', 'estada', 'estados', 'estadas',
                'estad', 'var', 'let', 'podemos', 'return', 'clase', 'import', 'usar', 'código', 'class', 'from', 'programación', 'permite', 'crear', 'lógica', 'datos', 'lenguaje'];
            return palabra.length > 2 && !palabrasComunes.includes(palabra);
        });
        const frecuenciaPalabras = palabrasFiltradas.reduce((contador, palabra) => {
            contador[palabra] = (contador[palabra] || 0) + 1;
            return contador;
        }, {});
        const palabrasOrdenadas = Object.keys(frecuenciaPalabras).sort((a, b) => frecuenciaPalabras[b] - frecuenciaPalabras[a]);
        const diezPalabrasMasRepetidas = palabrasOrdenadas.slice(0, 10);
        const listaPalabras = document.createElement('ol');
        diezPalabrasMasRepetidas.forEach(palabra => {
            const elementoLista = document.createElement('li');
            elementoLista.textContent = `${palabra}: ${frecuenciaPalabras[palabra]} veces`;
            listaPalabras.appendChild(elementoLista);
        });
        divExterno.appendChild(listaPalabras);
        const elementos = divTemp.querySelectorAll('pre, tr, h1, h2, h3, p, li, em');
        const contenidoCopiado = new Set();
        let continuarCopiando = true;
        elementos.forEach(elemento => {
            if (continuarCopiando) {
                const contenidoElemento = elemento.outerHTML.trim();
                if (!contenidoCopiado.has(contenidoElemento)) {
                    const elementoClonado = elemento.cloneNode(true);
                    diezPalabrasMasRepetidas.forEach((palabra, index) => {
                        const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
                        const fontSize = getOriginalFontSize(elementoClonado) + (5 - (index / 2));
                        elementoClonado.innerHTML = elementoClonado.innerHTML.replace(regex, `<span style="font-size: ${fontSize}px;">${palabra}</span>`);
                    });
                    divExterno.appendChild(elementoClonado);
                    contenidoCopiado.add(contenidoElemento);
                }
                if (elemento.tagName === 'H1' && elemento.id === 'exenode_24_AnexoLicenciaderecursos') {
                    continuarCopiando = false;
                }
            }
        });
    } catch (error) {
        console.error('Error al cargar y procesar el contenido externo:', error);
    }
}
function getOriginalFontSize(element) {
    // Asumiendo que el tamaño de fuente original para cada tipo de elemento es el siguiente:
    const originalFontSizes = {
        'H1': 32,
        'H2': 24,
        'H3': 18.72,
        'P': 16,
        'LI': 16,
        'EM': 16,
        'PRE': 10.67,
        'TR': 16
    };
    return originalFontSizes[element.tagName] || 16; // Devuelve 16 si el tipo de elemento no está en la lista
}

loadAndProcessExternalContent();
