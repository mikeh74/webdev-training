"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/

"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from .views import Home

urlpatterns = [
    path("", Home.as_view(), name="home"),
    path("news/", include("news.urls")),
    path("admin/", admin.site.urls),
]

# Serve static and media files during development
if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
