const ordenarProducto = (producto) => {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando ${producto} de StubbornApp`);
    setTimeout(() => {
      if (producto === "platos") {
        resolve("Ordenando Platos de StubbornApp");
      } else {
        reject("Producto no disponible actualmente");
      }
    }, 1000);
  });
};

const procesarPedido = (respuesta) => {
  return new Promise((resolve) => {
    console.log("Procesando respuesta");
    console.log(`La respuesta fue: ${respuesta}`);
    setTimeout(() => {
      resolve("Procesado con exito, ¡Gracias por su compra!");
    }, 2000);
  });
};

// ordenarProducto("boxer").then((value) => procesarPedido(value)).catch((error) => console.log(error));

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('platos');
