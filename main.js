let contenedorMercaderia = document.getElementById ("contenedor-mercaderia");


const mercaderia = [
    { id : 1 , Nombre : "Camiseta Titular", Talle : "XL", Precio : 19000, img :  "./img/Titular-GodoyCruz.jpg",},
    { id : 2 , Nombre : "Camiseta Titular", Talle : "L", Precio : 18500, img :  "./img/Titular-GodoyCruz.jpg",},
    { id : 3 , Nombre : "Camiseta Titular", Talle : "M", Precio : 18000, img :  "./img/Titular-GodoyCruz.jpg",},
    { id : 4 , Nombre : "Camiseta Titular", Talle : "S", Precio : 17500, img :  "./img/Titular-GodoyCruz.jpg",},
    { id : 5 , Nombre : "Camiseta Suplente",Talle : "XL", Precio : 17500, img :  "./img/Alternativa-Godoycruz act.jpg",}, 
    { id : 6 , Nombre : "Camiseta Suplente",Talle : "L", Precio : 17000, img :  "./img/Alternativa-Godoycruz act.jpg",}, 
    { id : 7 , Nombre : "Camiseta Suplente",Talle : "M", Precio : 16500, img :  "./img/Alternativa-Godoycruz act.jpg",}, 
    { id : 8 , Nombre : "Camiseta Suplente",Talle : "S", Precio : 16000, img :  "./img/Alternativa-Godoycruz act.jpg",}, 
    { id : 9 , Nombre : "Pantalón Corto",Talle : "XL", Precio : 9000, img :  "./img/pantalon corto.jpg",},
    { id : 10 , Nombre : "Pantalón Corto",Talle : "L", Precio : 8500, img :  "./img/pantalon corto.jpg",},
    { id : 11 , Nombre : "Pantalón Corto",Talle : "M", Precio : 8000, img :  "./img/pantalon corto.jpg",},
    { id : 12 , Nombre : "Pantalón Corto",Talle : "S", Precio : 7500, img :  "./img/pantalon corto.jpg",},
    { id : 13 , Nombre : "Pantalón Largo", Talle : "XL", Precio : 12000, img : "./img/pantalon largo.jpg",},
    { id : 14 , Nombre : "Pantalón Largo", Talle : "L", Precio : 11000, img :  "./img/pantalon largo.jpg",},
    { id : 15 , Nombre : "Pantalón Largo", Talle : "M", Precio : 10500, img :  "./img/pantalon largo.jpg",},
    { id : 16 , Nombre : "Pantalón Largo", Talle : "S", Precio : 10000, img :  "./img/pantalon largo.jpg",},
    { id : 17 , Nombre : "Campera", Talle : "XL", Precio : 20000, img :  "./img/campera.jpg",},
    { id : 18 , Nombre : "Campera", Talle : "L", Precio : 19500, img :  "./img/campera.jpg",},
    { id : 19 , Nombre : "Campera", Talle : "M", Precio : 19000, img :  "./img/campera.jpg",},
    { id : 20 , Nombre : "Campera", Talle : "S", Precio : 18000, img :  "./img/campera.jpg",}, 
]

 let carrito = []


mercaderia.forEach((producto) => {
    let div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
    <img src="${producto.img}">
    <p><b>Nombre</b>: ${producto.Nombre}</p>
    <P><b> Talle</b>: ${producto.Talle}</p>
    <b>$${producto.Precio}</b>
    <button id = "agregar ${producto.id}" class = "boton-agregar">Agregar  </button>
    `;
    

    contenedorMercaderia.appendChild(div);

    const boton = document.getElementById(`agregar ${producto.id}`)
    boton.addEventListener("click" , () => {
        agregarAlCarrito(producto.id)
    })

});
    
    
const agregarAlCarrito = (prodId) => {
    const item = mercaderia.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito))
} ;   
   
let compras = localStorage.getItem("carrito")
compras = JSON.parse(compras)
console.log(compras);






  
