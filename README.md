# Api genérica con node, typescript y express

### Docker commands:

##### docker build . -t *container name*

"Buildea" el container.

##### docker run -p 3000:3000 *container name*

Corre una instancia del container

### npm commands:

##### npm run dev

Corre una instancia de la aplicación directamente desde /src/index.ts con nodemon (como usa ts-node, transpila automáticamente a js)

##### npm run build

Toma todo lo que está en la carpeta /src, lo convierte a js y lo guarda dentro de /dist. Si se quiere agregar un watcher para que el compilador quede escuchando se debe agregar el flag -w (quedaría "tsc -w").

##### npm start

Ejecuta la aplicacion con node a partir de /dist. Tener en cuenta que para que funcione, hay que previamente haber corrido npm run build.
