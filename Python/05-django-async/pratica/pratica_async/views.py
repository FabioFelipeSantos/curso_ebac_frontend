import asyncio
import uuid
import httpx
from django.http import HttpRequest
from django.shortcuts import render
from channels.layers import get_channel_layer

NUM_MAX_LOOP = 10


async def http_call_async(task_id, group_name):
    result = {}
    channel_layer = get_channel_layer()
    print(f"Iniciando tarefa assíncrona {task_id} para o grupo {group_name}")

    await channel_layer.group_send(
        group_name, response_for_ws(0, "task_update", "started", task_id, result)
    )
    for num in range(1, NUM_MAX_LOOP + 1):
        await asyncio.sleep(1)
        print(f"Tarefa {task_id}: passo {num} de {NUM_MAX_LOOP} concluído")
        result[f"step_{num}"] = f"Completado no passo {num}"
        await channel_layer.group_send(
            group_name,
            response_for_ws(num, "task_update", "in_progress", task_id, result),
        )

    async with httpx.AsyncClient() as client:
        print(f"Tarefa {task_id}: fazendo chamada HTTP")
        r = await client.get("https://httpbin.org")
        result["http_status"] = r.status_code

    print(f"Tarefa {task_id}: concluída, enviando para o grupo {group_name}")
    channel_layer = get_channel_layer()

    await channel_layer.group_send(
        group_name,
        response_for_ws(None, "task_completed", "completed", task_id, result),
    )
    print(f"Tarefa {task_id}: notificação enviada com sucesso")


async def async_view(request: HttpRequest):
    title = "Django Async - Pratique EBAC"
    task_id = str(uuid.uuid4())
    group_name = f"task_{task_id}"

    loop = asyncio.get_event_loop()
    loop.create_task(http_call_async(task_id, group_name))

    context = {"title": title, "task_id": task_id, "group_name": group_name}

    return render(request, "index.html", context)


def response_for_ws(num, type, status, task_id, result):
    if num:
        message = f"Passo {num} de {NUM_MAX_LOOP} concluído"
        progress = int(num * 100 / NUM_MAX_LOOP)
    else:
        message = "Tarefa concluída com sucesso"
        progress = 100

    return {
        "type": type,
        "task_id": task_id,
        "status": status,
        "message": message,
        "progress": progress,
        "current_result": result.copy(),
    }
