$.when($.ready).then(function () {
    debugger;
    secciones();
    
});
    

   ///funciones de correo
function captura(){
    
    var nombre=document.getElementById("nombre").value;
    var email=document.getElementById("email").value;
    var contraseña=document.getElementById("contraseña").value;

        console.log("nombre : "+nombre);
        console.log("correo: "+email);
        console.log("contraseña: "+contraseña);

    
    
}    

   //funciones de tarjetas
function laptops1() {
    document.getElementById('laptops1').style.display="block";
    document.getElementById("pantalla1").style.display ="none";
    document.getElementById('gamer1').style.display ="none";
    document.getElementById('computadoras').style.display ="none";
    
}

function gamer1() {
    document.getElementById('laptops1').style.display="none";
    document.getElementById("pantalla1").style.display ="none";
    document.getElementById('gamer1').style.display ="block";
    document.getElementById('computadoras').style.display ="none";
    
}


function pantalla1() {
    document.getElementById('laptops1').style.display="none";
    document.getElementById("pantalla1").style.display ="block";
    document.getElementById('gamer1').style.display ="none";
    document.getElementById('computadoras').style.display ="none";
    
}

function computadoras(){
    document.getElementById('laptops1').style.display="none";
    document.getElementById("pantalla1").style.display ="none";
    document.getElementById('gamer1').style.display ="none";
    document.getElementById('computadoras').style.display ="block";
}
