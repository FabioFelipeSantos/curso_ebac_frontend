from django.contrib import admin
from django.urls import path

from .views import async_view

urlpatterns = [path("admin/", admin.site.urls), path("", async_view)]
