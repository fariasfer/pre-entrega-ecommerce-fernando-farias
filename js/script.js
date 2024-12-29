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
  
  


// Carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Reviso localStorage o creo array vacio carrito.


console.log(producto);

carrito.push(producto); // Agrego producto al carrito.
console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito)); //Guarda carrito en LocalStorage.


//Asincronia
// Listado de productos.

fetch("./posts.json")
    .then((response) => response.json())
    .then((posts) => {
        const div = document.querySelector("div");
        div.innerHTML ="";

        posts.forEach(post => {
            const html = `
            <div data-id="${producto.id}" class="card">
                <h4 class="nombre-producto">${post.nombre}</h4>                
                <p class="descripcion">${post.descripcion}</p>
                <img src="./img/${post.imagen}" alt="${post.nombre}" />
                <p class="precio">$ ${post.precio}</p>     
                <button type="button" class="agregar">Agregar</button>       
            </div>    
        `;
        div.innerHTML += html;
        });
    })
    .catch((error)=> {
        console.log(error);
});

