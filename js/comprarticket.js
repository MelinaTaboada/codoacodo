var nombre= document.getElementById("nombre");
var apellido= document.getElementById("apellido");
var email= document.getElementById("email");
var entradas= document.getElementById("entradas");
var categoria= document.getElementById("categoria");
var btnborrar= document.getElementById("btnborrar");
var totalapagar=document.getElementById("totalapagar");



function validar() {

    if (nombre.value === "") {
        //alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (email.value === "") {
        alert("Por favor, escribí tu email.");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }

    var esValido = emailValido(email.value);

    if (!esValido) {
        alert("Por favor, escribí un correo electrónico válido.");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }
}

function emailValido(mail){
    return ( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) );
}



const valorticket=200;
const descuentoEstudiante=40;
const descuentoTrainee=100;
const descuentoJunior=170;

function CalcularMonto(){
    let CantidadTickets= entradas.value;
    let CategoriaSeleccionada= categoria.value;

    if(CategoriaSeleccionada === "0"){
        totalapagar.innerHTML= CantidadTickets*valorticket;
    }

    if(CategoriaSeleccionada === "1"){
        totalapagar.innerHTML= CantidadTickets*descuentoEstudiante;
    }
    if(CategoriaSeleccionada === "2"){
        totalapagar.innerHTML= CantidadTickets*descuentoTrainee;
    }

    if(CategoriaSeleccionada === "3"){
        totalapagar.innerHTML= CantidadTickets*descuentoJunior;
    }
}


function ValidaryCalcularMonto(){
    validar();
    CalcularMonto();
}

function BorrarTotal(){
    totalapagar.innerHTML= "";    
}