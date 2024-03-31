const express = require("express");
const app = express();

//requerimiento 2 : Definir la carpeta “assets” como carpeta pública del servidor.
app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.sendFile(__dirname, "/index.html");
});

//requerimiento 3 : Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios. 
const usuarios = [
    "Juan",
    "Jocelyn",
    "Astrid",
    "Maria",
    "Ignacia",
    "Javier",
    "Brian",
];

//requerimiento 3 : Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios. 
app.get("/abracadabra/:usuarios", function (req, res) {
    res.send({ usuarios });
});

//requerimiento 4: Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor. 
//En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”
app.get("/abracadabra/juego/:usuario", (req, res) => {
    const usuario = req.params.usuario;
    usuarios.includes(usuario) ? res.sendFile(__dirname + "/index.html") : res.redirect("/who.jpeg");
});

//requerimiento 5 :Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria.
//En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort. 
app.get("/abracadabra/conejo/:n", (req, res) => {
    //n se iguala a Math.random() que genera números en el rango [0, 1), y al multiplicarse por 4 obtenemos un rango de [0, 4). Luego, al aplicar Math.floor(), obtienes números enteros en el rango de 0 a 3, a los cuales luego les sumas 1 para obtener el rango de 1 a 4. Entonces
    const n = Math.floor(Math.random() * 4) + 1;
    const numero = parseInt(req.params.n);
    if (numero === n) {
      res.sendFile(__dirname + "/assets/conejito.jpg");
    } else {
      res.sendFile(__dirname + "/assets/voldemort.jpg");
    }
  });
  
//6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor. (1 Punto)
app.get("*", (req, res) => {
    //
    res.send("Esta página no existe");
  });

// requerimiento 1: Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});