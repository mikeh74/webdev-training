# Django Views

Views are Python functions or classes that receive web requests and return web responses. They contain the logic for processing data and rendering templates.

**Key Concepts to Learn:**

* **Function-Based Views (FBV)**: Simple functions that take a request and return a response
* **Class-Based Views (CBV)**: Reusable view classes that provide common patterns (ListView, DetailView, CreateView, etc.)
* **Template Context**: How to pass data from views to templates
* **QuerySets**: How to retrieve data from the database using Django's ORM
* **URL Parameters**: Capturing parameters from URLs (like article slugs or IDs)

**For the News Project, you'll need views for:**

* **News Index View**: Display a list of all published news articles
  * Query all published articles
  * Filter or organize by category
  * Pass articles and categories to the template
  * Use `ListView` or a function-based view

* **News Detail View**: Display a single news article with full details
  * Retrieve a specific article by slug or ID
  * Get related articles (same category or author)
  * Pass article and related articles to template
  * Use `DetailView` or a function-based view

**Example View Structure:**

```python
from django.views.generic import ListView, DetailView
from .models import NewsArticle, NewsCategory

class NewsIndexView(ListView):
    model = NewsArticle
    template_name = 'news/index.html'
    context_object_name = 'articles'
    
    def get_queryset(self):
        return NewsArticle.objects.filter(status='published').order_by('-publication_date')
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = NewsCategory.objects.all()
        return context

class NewsDetailView(DetailView):
    model = NewsArticle
    template_name = 'news/detail.html'
    context_object_name = 'article'
    slug_field = 'slug'
```

**Resources to Study:**
* [Django Views Documentation](https://docs.djangoproject.com/en/5.2/topics/http/views/)
* [Class-Based Views](https://docs.djangoproject.com/en/5.2/topics/class-based-views/)
* [Built-in Class-Based Generic Views](https://docs.djangoproject.com/en/5.2/ref/class-based-views/)
* [Making Queries](https://docs.djangoproject.com/en/5.2/topics/db/queries/)
