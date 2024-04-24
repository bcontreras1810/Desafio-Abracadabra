  <h1>Abracadabra</h1>
  <h2>Descripción</h2>
  <p>En este desafío se pondrán a prueba los conocimientos de Node y Express, así como la creación de rutas, objetos Request y Response, middlewares y la devolución de sitios web estáticos. Se requiere desarrollar un servidor con Express que sirva un sitio web estático con temática de magia, donde se presenten 4 sombreros y al hacer clic en uno de estos encontrar el conejo oculto. Además, se deben implementar las siguientes rutas:</p>
 
  <h2>Listado de Rutas</h2>

  <ol>
    <li>/abracadabra/usuarios</li>
    <li>/abracadabra/juego/:usuario</li>
    <li>/abracadabra/conejo/:n</li>
    <li>Ruta genérica para manejar rutas no definidas</li>
   </ol>

  <h2>Conocimientos a Poner a Prueba</h2>
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>Creación de rutas</li>
    <li>Objetos Request y Response</li>
    <li>Middlewares</li>
    <li>Devolución de sitios web estáticos</li>
  </ul>

  <h2>Clonar el Repositorio</h2>
  <p>Para clonar este proyecto, ejecuta el siguiente comando en tu terminal:</p>
  <pre><code>git clone https://ruta-del-repositorio.git</code></pre>

  <h2>Instalación</h2>
  <p>Antes de ejecutar el servidor, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, instala las dependencias del proyecto ejecutando:</p>
  <pre><code>npm install</code></pre>

  <h2>Soluciones a los Requerimientos</h2>

   <ol>
    <li><strong>/abracadabra/usuarios:</strong> Devolver un JSON con un arreglo de nombres alojado en el servidor.</li>
    <li><strong>/abracadabra/juego/:usuario:</strong> Verificar que el usuario existe en el arreglo alojado en el servidor. En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen "who.jpeg".</li>
    <li><strong>/abracadabra/conejo/:n:</strong> Validar si el parámetro "n" coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.</li>
    <li><strong>Ruta genérica:</strong> Devolver un mensaje diciendo "Esta página no existe..." al consultar una ruta que no esté definida en el servidor.</li>
  </ol>
  
