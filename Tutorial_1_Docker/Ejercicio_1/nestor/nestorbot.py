import random
import pymongo
import os

DATABASE="nestor"
COLLECTION="frases"

class NestorBot:
    
    def __init__(self, channel):
        self.channel = channel
        
    def _choose_message(self):
        myclient = pymongo.MongoClient(host=os.environ['MONGO_HOST'], port=int(os.environ['MONGO_PORT']))
        db = myclient[DATABASE]
        col = db[COLLECTION]
        var = [{'$sample':{'size':1}}]
        results = col.aggregate(var)
        text=" "
        for doc in results:
            text=doc["text"]
        return {"type": "section", "text": {"type": "mrkdwn", "text": text}},
    
    def get_message_payload(self):
        return {
            "channel": self.channel,
            "blocks": [*self._choose_message()],
        }
