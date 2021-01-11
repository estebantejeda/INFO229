# Ejecución

## Sin Docker

### Terminal 1: server
Activa el servidor para poder escuchar los mensajes que son enviados de Slack
~~~bash
node src/server.js
~~~

### Terminal 2: Ngrox
Permite conectar el servidor local con un servidor en internet. Esto para escuchar los mensajes enviados de Slackservidor
~~~bash
./ngrox http 3000
~~~

### Terminal 3: events
Permite añadir las tareas a una cola
~~~bash
node src/bots/events.js
~~~

## Con Docker

~~~bash
docker-compose build
docker-compose up
~~~
