~~~bash
$ docker run -v $(pwd)/mongodata:/data/db --name "nestor_mongo" mongo &
$ docker exec -it nestor_mongo bash
~~~

~~~bash
$ docker-compose up
~~~

