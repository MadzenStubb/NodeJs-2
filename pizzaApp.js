const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Pedido realizado, la pizza esta en camino.')
        } else {
            reject('Hubo un error en el proceso. Por favor intente nuevamente.')
        }
    }, 1000)
})

miPedidoDePizza.then((value) => console.log(value)).catch((error) => console.log(error))
