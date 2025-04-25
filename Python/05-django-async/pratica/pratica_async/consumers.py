import json
from channels.generic.websocket import AsyncWebsocketConsumer


class TaskConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.task_id = self.scope["url_route"]["kwargs"]["task_id"]
        self.group_name = f"task_{self.task_id}"

        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

        print(f"WebSocket conectado para tarefa {self.task_id}")
        await self.send(
            text_data=json.dumps(
                {
                    "type": "connection_established",
                    "message": f"Conectado à tarefa {self.task_id}",
                }
            )
        )

    async def task_update(self, event):
        print(
            f"Consumer recebeu atualização para tarefa {event['task_id']}: {event['message']}"
        )

        await self.send(
            text_data=json.dumps(
                {
                    "type": "task_update",
                    "task_id": event["task_id"],
                    "status": event["status"],
                    "message": event["message"],
                    "progress": event["progress"],
                    "current_result": event.get("current_result", {}),
                }
            )
        )
        print(f"Atualização enviada para o cliente via WebSocket")

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)
        print(
            f"WebSocket desconectado para tarefa {self.task_id}, código: {close_code}"
        )

    async def task_completed(self, event):
        print(f"Consumer recebeu evento task_completed para tarefa {event['task_id']}")
        print(f"Dados do resultado: {event['current_result']}")

        await self.send(
            text_data=json.dumps(
                {
                    "type": "task_completed",
                    "task_id": event["task_id"],
                    "status": event["status"],
                    "message": event["message"],
                    "progress": event["progress"],
                    "current_result": event.get("current_result", {}),
                }
            )
        )
        print(f"Resposta enviada para o cliente via WebSocket")
