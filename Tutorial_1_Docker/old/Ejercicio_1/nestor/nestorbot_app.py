from slack import WebClient
from nestorbot import NestorBot
import os

slack_web_client = WebClient(token=os.environ.get("SLACK_TOKEN"))
nestor_bot = NestorBot("#general")
message = nestor_bot.get_message_payload()
slack_web_client.chat_postMessage(**message)
