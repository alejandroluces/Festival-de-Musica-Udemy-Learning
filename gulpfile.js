
const {src,dest}= require('gulp') // Importar gulp
const sass = require('gulp-sass')(require('sass')) // Importar el compilador de sass

function css(done) {
  
    src('src/scss/app.scss')//Identificar el archivo fuente
    .pipe(sass())//Obtener el archivo fuente. Compilador
    .pipe(dest('build/css'));//Destino del archivo compilado para almacenar en el disco duro

  done()// Callback que avisa que la tarea ha terminado
}

function dev(done) {
  watch('src/scss/app.scss', css);
  done();
}

exports.css = css; // Exportar la tarea css
exports.dev = dev; // Exportar la tarea dev