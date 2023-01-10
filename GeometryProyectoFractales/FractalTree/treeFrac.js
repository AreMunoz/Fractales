var botonGenerar = document.getElementById("GenerarFractal");



botonGenerar.addEventListener("click", event =>{
    draw();
});


//funcion de pausa
function escribirLog(){
    console.log("pausa");
}


//funcion del fractal Arbol

// var myCanvas = document.getElementById("my_canvas");
//     var ctx = myCanvas.getContext("2d");
    function draw(startX, startY, len, angle, branchWidth) { //esta funcion dibuja el fractal arbol
        
        setTimeout(escribirLog, 50);
        // console.log("pausa");
        var myCanvas = document.getElementById("my_canvas");
        var ctx = myCanvas.getContext("2d");

        ctx.lineWidth = branchWidth;

        ctx.beginPath();
        ctx.save();

        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";

        ctx.translate(startX, startY);
        ctx.rotate(angle * Math.PI/180);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();

        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(0,0,0,0.8)";

        if(len < 10) {
            ctx.restore();
            return;
        }

        draw(0, -len, len*0.8, angle-15, branchWidth*0.8);
        draw(0, -len, len*0.8, angle+15, branchWidth*0.8);

        ctx.restore();
    }
    //draw(400, 600, 120, 0, 10)  


//Esta funcion busca un objeto y cambia la clase que se ocupa en CSS
function cambiarClase(pIdLienzo, pIdClass){
    myCanvas=document.getElementById(pIdLienzo);
    console.log(pIdClass);
    myCanvas.className = pIdClass;
}

//funcion que muestra el arbol
function mostrarArbol(){
    draw(300, 500, 100, 0, 15);
    cambiarClase('lienzoArbol', 'lienzoVisible');


}