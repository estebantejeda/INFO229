~~~bash
$ docker run -v $(pwd)/mongodata:/data/db --name "wiki_mongo" mongo &
$ docker exec -it wiki_mongo bash
~~~

~~~bash
$ docker-compose up
~~~

