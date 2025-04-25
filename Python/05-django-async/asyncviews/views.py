import time
import asyncio
import httpx
from django.http import JsonResponse, HttpRequest, HttpResponse


async def http_call_async():
    for num in range(1, 6):
        await asyncio.sleep(1)
        print(num)

    async with httpx.AsyncClient() as client:
        r = await client.get("https://httpbin.org")
        print(r)


def http_call_sync():
    for num in range(1, 6):
        time.sleep(1)
        print(num)

    r = httpx.get("https://httpbin.org")
    print(r)


async def async_view(request: HttpRequest):
    loop = asyncio.get_event_loop()
    loop.create_task(http_call_async())

    return HttpResponse("Non-blocking HTTP request")


def sync_view(request: HttpRequest):
    http_call_sync()
    return HttpResponse("Blocking HTTP request")


def api(request: HttpRequest):
    time.sleep(1)
    payload = {
        "message": "Hello World",
    }

    if "task_id" in request.GET:
        payload["task_id"] = request.GET["task_id"]

    return JsonResponse(payload)
