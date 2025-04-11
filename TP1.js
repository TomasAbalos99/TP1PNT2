const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, {
         id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
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