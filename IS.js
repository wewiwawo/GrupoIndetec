function login(){

let user=document.getElementById("Usuario").value;
let password=document.getElementById("Clave").value;

if(user=="UsuarioW1" && password=="1234567")
{
window.location="PRESUPUESTO.HTML";

}

else
{
alert("Ingrese los datos correctos.");

}



}