from django.contrib import admin

from .models import Author, NewsArticle


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "publication_date")
    search_fields = ("title", "content")
    list_filter = ("publication_date", "author")
