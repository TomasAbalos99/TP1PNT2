const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];


    //Parte 1
    //1)
    console.log(productos[0]);
    
    //2)
    for (let producto of productos){
        console.log("Producto: " + producto.nombre + " ,Precio:" + producto.precio);
    }

    // 3)
    productos.forEach(producto => {
        console.log("producto:" + producto.nombre + ", Precio: " + producto.precio)
    });


    //Parte 2
    //4)
    const nombresProductos = productos.map(p => p.nombre);
    console.log(nombresProductos);

    //5)
    const soloRopa = productos.filter(p => p.categoria == "Ropa");
    console.log(soloRopa);

    //6)
    const mayorA3000 = productos.filter(p => p.precio >= 3000);
    console.log(mayorA3000);

    //7)
    const gorra = productos.find(p => p.nombre = "Gorra");
    console.log(gorra)

    //Parte 3

    //8) 
    const existe = productos.some(p => p.precio > 10000);
    console.log(existe);

    //9)
    const mayorA10000 = productos.every(p => p.precio > 10000);
    console.log(mayorA10000);

    //10) 
    const existeNombre = nombresProductos.includes("Campera");
    console.log(existeNombre);

    //Parte 4

    //11)
    const precioOrdenado = productos.sort((p1,p2)=> p1.precio - p2.precio);
   
    precioOrdenado.forEach(producto => {
        console.log(producto.precio)
    });

    //12)
    const nuevoArray = productos.map(p => "El producto " + p.nombre + " cuesta $" + p.precio +
         " y pertenece a la categoria " + p.categoria   );
    nuevoArray.forEach(m => {
        console.log(m)
    });

    //13)
    const productos2 = [
    { id: 6, nombre: "Ojotas", precio: 550, categoria: "Calzado" },
    { id: 7, nombre: "Pulover", precio: 1500, categoria: "Ropa" },
    { id: 8, nombre: "Cuello polar", precio: 1000, categoria: "Accesorios" }, 
    { id: 9, nombre: "Medias", precio: 500, categoria: "Calzado" },
    { id: 10, nombre: "Zapatos", precio: 9000, categoria: "Ropa" }
    ];
    const lista = [...productos,...productos2];
    lista.forEach(p=>{
        console.log(p)
    })