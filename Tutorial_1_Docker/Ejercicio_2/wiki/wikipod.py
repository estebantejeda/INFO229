import wikipedia
import pymongo
import os

DATABASE = "wiki"
COLLECTION = "wikicol"               

class wikiPod:
     #Constructor
      def __init__(self,channel):
         self.channel = channel

     #subir informacion
      def subir_mensaje(dato):
         #conexion a MONGO
         myclient = pymongo.MongoClient(host=os.environ['MONGO_HOST'], port=int(os.environ['MONGO_PORT']))
         db = myclient[DATABASE]
         col = db[COLLECTION]
         col.insert_one({'title':dato.title,'content':dato.content})

     #Buscar dato
      def buscar_dato():
         data = input("Articulo a almacenar")
         w = wikipedia.page(data)
         wikiPod.subir_mensaje(w)
