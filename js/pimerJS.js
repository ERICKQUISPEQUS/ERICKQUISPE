// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Hola mundo desde JavaScript");
//alert nos sirve para mostrarle un alert al usuario
alert("Hola Mundo. Esto es una Alerta");

function cambiarCarita(){
    document.getElementById("carita").src="imagenes/triste.jpg";
    document.getElementById("logoSenati").src="imagenes/senati1.png";
    alert("Por que tas triste");
}
function feliz(){
    document.getElementById("carita").src="imagenes/feliz.jpg";
    document.getElementById("TituloJS").textContent="Ejemplo de Caritas";
}
function nombresNav(){
    document.getElementById("m1").textContent="index";
    document.getElementById("m2").textContent="segunda";
    document.getElementById("m3").textContent="tercera";
    document.getElementById("m4").textContent="cuarta";
    document.getElementById("m5").textContent="quinta";
    document.getElementById("m6").textContent="Sexta Página";
}

function cambiarTitulo(){
    document.getElementById("titulo").textContent="Practicando JS";
    document.getElementById("titulo").style.color="#290c60" 
    document.getElementById("logoSenati").src="imagenes/senati3.jpg";
    document.getElementById("encabezado").style.background="#89cce2"
}

function suma(){
    let num1 = 3;
    let num2 = 5;
    let suma = num1+num2;
    alert("la suma es de" +suma);
} 
function eje01(){
    let p1 = 10;
    let p2 = 5;
    let p3 = 15;
    let c1 = 3;
    let c2 = 18;
    let c3 = 6;
    let Stotal, total;
    Stotal = (p1*c1)+(p2*c2)+(p3*c3);
    if(Stotal>100){
        total = Stotal*0.95;
        alert("Su compra lleva descuento");
    }else{
        total = Stotal;
    }
    alert("El total a Pagar es de: S/."+total);

}
function eje02(){
    let amigos = 10;
    let total = 100;
    let cuota = total/amigos;
    alert("Son "+amigos+" amigos"+ " y la cuota del total S/."+total+" es de : S/."+cuota);
}

// agregar para la tarea 3
document.addEventListener("DOMContentLoaded", function(){

  // 6 botones con alert
    document.getElementById("btn1").onclick = () => alert("Bienvenido a mi página!");
    document.getElementById("btn2").onclick = () => alert("Aprendiendo JavaScript con Senati");
    document.getElementById("btn3").onclick = () => alert("Este es el tercer mensaje");
    document.getElementById("btn4").onclick = () => alert("Los botones funcionan correctamente");
    document.getElementById("btn5").onclick = () => alert("Sigue practicando para mejorar");
    document.getElementById("btn6").onclick = () => alert("Último mensaje de prueba");

  // 4 botones que cambian la página
    document.getElementById("fondo").onclick = () => document.body.style.background = "black";
    document.getElementById("texto").onclick = () => document.body.style.color = "white";
    document.getElementById("tamano").onclick = () => document.getElementById("imagen").style.width = "300px";
    document.getElementById("imagenBtn").onclick = () => document.getElementById("imagen").src = "imagenes/senati2.jpg";

  // 2 botones que cambian texto
    document.getElementById("cambiarTitulo").onclick = () => document.getElementById("titulo").innerText = "Nuevo Título con JavaScript";
    document.getElementById("cambiarParrafo").onclick = () => document.getElementById("parrafo").innerText = "Este párrafo fue cambiado dinámicamente con JavaScript.";
});