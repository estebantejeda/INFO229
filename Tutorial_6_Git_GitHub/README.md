 ![git-banner](/home/esteban/Proyectos/INFO229/Tutorial_6_Git_GitHub/.images/git-banner.png)

# Git

## ¿Qué es Git?

​	Git, es un software de control de versiones diseñado por Linus Torvalds. fue creado pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente.

## Instalación en Linux

### Linux

~~~bash
$ sudo apt install git
~~~

### MacOS

~~~bash
 $ brew install git
~~~

### Windows

https://git-scm.com/download/win

## Comandos básicos

![fc43b465-dbfb-465e-9705-b38d230452fc](/home/esteban/Proyectos/INFO229/Tutorial_6_Git_GitHub/.images/fc43b465-dbfb-465e-9705-b38d230452fc.jpeg)

![79dab1f0-3c3d-493c-80e0-1dcbadc54f62](/home/esteban/Proyectos/INFO229/Tutorial_6_Git_GitHub/.images/79dab1f0-3c3d-493c-80e0-1dcbadc54f62.jpeg)

## Ejemplo de uso

​	Supongamos que tenemos la siguiente lista de archivos en la carpeta del proyecto:

~~~bash
$ ls
css  favicon.ico  fonts  img1.png  img2.png  index.html  js
~~~

​	En caso de querer ver la información del proyecto a detalle:

~~~bash
$ ls *
favicon.ico  img1.png  img2.png  index.html

css:
master.css  style.css

fonts:
font1.ttf  font2.ttf  font3.ttf

js:
master.js
~~~

1. Ejecutamos git en la carpeta del proyecto.

~~~bash
$ git init
Inicializado repositorio Git vacío en $({pwd}/.git/)
~~~

2. Se desea iniciar agregar el archivo `index.html` al _stage_.

~~~bash
$ git add index.html
~~~

3. Queremos registrar los cambios que hemos realizado al `index.html`.

~~~bash
$ git commit -m "Se registra el index.html"
[master (commit-raíz) 45b980f] Se registra el index.html
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html
~~~

4. Ahora se desea hacer un seguimiento de todos los archivos con extensión `.png` que están en el proyecto (`img1.png` y `img2.png`)

~~~bash
$ git add *.png
~~~

5. Al igual que con el `index.html`, ahora queremos registrar el ingreso de todas las fotografías con extensión `.png` del proyecto.

~~~bash
$ git commit -m "Se agregaron las fotogragías"
[master 94f2f95] Se agregaron las fotogragías
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 img1.png
 create mode 100644 img2.png
~~~

6. Además de archivos y fotos, también es posible añadir carpetas completas. Para esto haremos lo siguiente.

~~~bash
$ git add css/
~~~

7. Volvemos  a hacer el `commit`.

~~~bash
$ git commit -m "Añadimos los estilos css"
[master ba73939] Añadimos los estilos css
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 css/master.css
 create mode 100644 css/style.css
~~~

8. Si queremos ver la lista de archivos que nos falta para hacer el seguimiento, debemos de hacer lo siguiente

~~~bash
$ git status
En la rama master
Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
        favicon.ico
        fonts/
        js/

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)
~~~

9. Si ahora queremos añadir todos los archivos faltantes para hacer el seguimiento. Todos menos las fuentes (`fonts`). Para añadir todos los archivos al _stage_, se debe realizar el siguiente comando.

~~~bash
$ git add -A
~~~

10. Ahora podemos ver el status del seguimiento.

~~~bash
$ git status
En la rama master
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        nuevo archivo:  favicon.ico
        nuevo archivo:  fonts/font1.ttf
        nuevo archivo:  fonts/font2.ttf
        nuevo archivo:  fonts/font3.ttf
        nuevo archivo:  js/master.js
~~~

11. Como se puede ver, ahora el `status` a cambiado. Todos los archivos están el el _stage_. Pero nosotros no queremos la carpeta `font` dentro de nuestro seguimiento. Por lo tanto, debemos ejecutar el siguiente comando.

~~~bash
$ git resert fonts/
~~~

12. Ahora, si hacemos un `git status`, se puede ver que el output a cambiado.

~~~bash
$ git status
En la rama master
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        nuevo archivo:  favicon.ico
        nuevo archivo:  js/master.js

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
        fonts/
~~~

13. Solo queda hacer el `commit`.

~~~bash
$ git commit -m "Se agregan los archivos de js y el favicon"
[master 7a03a7c] Se agregan los archivos de js y el favicon
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 favicon.ico
 create mode 100644 js/master.js
~~~

14. Ahora queremos agregar solo `font1.ttf` de la carpeta `fonts`. Para esto, volvemos a realizar el `git add`

~~~bash
$ git add fonts/font1.ttf
~~~

15. De esta forma, hemos agregado al _stage_ solo un archivo de una carpeta y no todo su contenido. Ahora realizaremos el `commit`.

~~~bash
$ git commit -m "font1.ttf añadida"
[master f0fcaa1] font1.ttf añadida
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 fonts/font1.ttf
~~~

16. Ahora, para finalizar. Realizaremos un `git add`  un `git commit` para terminar con el seguimiento de todos los archivos del proyecto.

~~~bash
$ git add -A && git commit -m "Añadidas las fuentes restantes"
[master 431fb04] Añadidas las fuentes restantes
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 fonts/font2.ttf
 create mode 100644 fonts/font3.ttf
~~~

17. Antes de finalizar, haremos un `git log` para ver todos los _commits_ que han sido realizados.

~~~bash
$ git log
commit 431fb041c7bcbb36f6c035dc8487e230e3ac1598 (HEAD -> master)
Author: Esteban Tejeda <esteban.tejeda@alumnos.uach.cl>
Date:   Mon Jan 11 19:17:03 2021 -0300

    Añadidas las fuentes restantes

commit f0fcaa18abc25a466efdf436cdc5f58fea95cae0
Author: Esteban Tejeda <esteban.tejeda@alumnos.uach.cl>
Date:   Mon Jan 11 19:15:25 2021 -0300

    font1.ttf añadida

commit 7a03a7c02607cdaa71acc9016820fc4a3fd03566
Author: Esteban Tejeda <esteban.tejeda@alumnos.uach.cl>
Date:   Mon Jan 11 19:13:06 2021 -0300

    Se agregan los archivos de js y el favicon

commit ba739396e1875ad8737aaef9f32f5d7a0da5de1e
Author: Esteban Tejeda <esteban.tejeda@alumnos.uach.cl>
Date:   Mon Jan 11 19:04:21 2021 -0300

    Añadimos los estilos css

commit 94f2f957ce491c8c9dc326f4ab0559f0e28e540f
Author: Esteban Tejeda <esteban.tejeda@alumnos.uach.cl>
Date:   Mon Jan 11 18:57:38 2021 -0300

    Se agregaron las fotogragías

commit 45b980f14f4e1a740667d0e1e11f6d08a5ab2453
Author: Esteban Tejeda <esteban.tejeda@alumnos.uach.cl>
Date:   Mon Jan 11 18:53:40 2021 -0300

    Se registra el index.html
~~~

​	Todos los archivos utilizados están dentro de la carpeta "Git_Test" en caso de que deseen realizar estas pruebas.

## Fuente

* https://git-scm.com/
* https://codigofacilito.com/articulos/que-es-git
* http://ed.team/cursos/git