from django.http import HttpRequest
from django.shortcuts import render


def index(request: HttpRequest):
    title = "Django Async - Pratique EBAC"

    context = {"title": title}

    return render(request, "index.html", context)
