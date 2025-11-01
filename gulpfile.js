const {src, dest, watch} = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')


function css(done) {
    //Compilar SASS
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'))
    
    
    done()
    dev()
}



function dev() {
    watch('src/scss/app.scss', css)
}

exports.css = css
exports.dev = dev