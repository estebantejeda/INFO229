import wikipedia
import pymongo
import os

DATABASE = "wiki"
COLLECTION = "wikicol"               

class wikiPod:
      def __init__(self,channel):
         self.channel = channel

      def subir_mensaje(dato):
         myclient = pymongo.MongoClient(host=os.environ['MONGO_HOST'], port=int(os.environ['MONGO_PORT']))
         db = myclient[DATABASE]
         col = db[COLLECTION]
         col.insert_one({'title':dato.title,'content':dato.content})

      def buscar_dato():
         w = wikipedia.page("Chile")
         wikiPod.subir_mensaje(w)
