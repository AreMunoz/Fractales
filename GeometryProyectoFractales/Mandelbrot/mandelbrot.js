
function generarMandel() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    for (var x = 0; x < 200; x++) {
        for (var y = 0; y < 200; y++) {
            var i = 0;
            var cx = -2 + x / 50;
            var cy = -2 + y / 50;
            var zx = 0;
            var zy = 0;

            do {
                var xt = zx * zy;
                zx = zx * zx - zy * zy + cx;
                zy = 2 * xt + cy;
                i++;
            }
            while (i < 255 && (zx * zx + zy * zy) < 4);

            var color = i.toString(16);
            context.beginPath();
            context.rect(x * 4, y * 4, 4, 4);
            context.fillStyle = '#' + color + color + color;
            context.fill();
        }
    }

}
//Esta funcion busca un objeto y cambia la clase que se ocupa en CSS
function cambiarClase(pIdLienzo, pIdClass) {
    myCanvas = document.getElementById(pIdLienzo);
    console.log(pIdClass);
    myCanvas.className = pIdClass;
}

//funcion que muestra el arbol
function mostrarMandelbrot() {
    generarMandel();
    cambiarClase('lienzoMandel', 'lienzoVisible');


}