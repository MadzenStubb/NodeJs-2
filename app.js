const prosemaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (prosemaCumplida) {
      resolve("Promesa cumplida...");
    } else {
      reject("Promesa rechazada...");
    }
  }, 1000);
});

miPromesa.then((value) => console.log(value)).catch((error) => console.log(error));