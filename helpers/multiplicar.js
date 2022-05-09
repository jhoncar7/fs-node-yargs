const fs = require('fs');
const colors = require('colors');

/* const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        for (let index = 1; index <= 10; index++) {
            salida += `${base}x${index} = ${base * index}\n`
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);
    })
} */

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`
            consola += `${base} ${'X'.green} ${index} ${'='.green} ${base * index}\n`
        }
        if (listar) {
            console.log('===================================='.green);
            console.log('Tabla del: '.green, colors.blue(base));
            console.log('===================================='.green);
            console.log(consola)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    crearArchivo
}