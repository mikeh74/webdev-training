from django.views.generic import DetailView, ListView

from .models import NewsArticle


class NewsArticleListView(ListView):
    model = NewsArticle
    template_name = "news/index.html"
    context_object_name = "articles"
    ordering = ["-publication_date"]


class NewsArticleDetailView(DetailView):
    model = NewsArticle
    template_name = "news/detail.html"
    context_object_name = "article"
