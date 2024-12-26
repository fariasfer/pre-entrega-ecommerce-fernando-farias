/* Formulario: 

Las validaciones utilizadas son:
1. Nombre: no puede quedar vacío.
2. Correo electrónico: no puede quedar vacío y debe tener el formato válido.
3. Comentario: no puede quedar vacío. */


function validarform(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
       alert("Tiene que escribir su nombre")
       document.fvalida.nombre.focus()
       return 0;
    }
  
    //valido el email
    if (document.fvalida.email.value.length==0){
        alert("Tiene que escribir su e-mail")
        document.fvalida.email.focus()
        return 0;
    }
    
    //valido el email
    valor = document.getElementById("email").value;
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
         alert("Escriba un e-mail valido")
         document.fvalida.email.focus()
         return false;
    }
     
    //valido el mensaje
    if (document.fvalida.message.value.length==""){
        alert("Tiene que escribir su mensaje")
        document.fvalida.message.focus()
        return 0;
     }
  }
  
  
  