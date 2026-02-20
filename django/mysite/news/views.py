from django.shortcuts import render

from .models import NewsArticle


# class NewsArticleListView(ListView):
#     model = NewsArticle
#     template_name = "news/index.html"
#     context_object_name = "articles"
#     ordering = ["-publication_date"]


# class NewsArticleDetailView(DetailView):
#     model = NewsArticle
#     template_name = "news/detail.html"
#     context_object_name = "article"


def index(request):
    articles = NewsArticle.objects.order_by("-publication_date")
    return render(request, "news/index.html", {"articles": articles})


def detail(request, pk):
    article = NewsArticle.objects.get(pk=pk)
    return render(request, "news/detail.html", {"article": article})
