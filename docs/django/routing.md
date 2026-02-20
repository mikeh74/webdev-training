# Routing in Django

## What is URL Routing?

URL routing is the process of mapping incoming HTTP requests to specific view functions or classes that handle the request. In Django, routing is configured through URL configuration files (typically named `urls.py`). When a user visits a URL, Django searches through the URL patterns to find a match and calls the corresponding view.

## How Django Processes URLs

When a user makes a request to your Django application:

1. Django loads the root URLconf specified in `settings.py` (the `ROOT_URLCONF` setting)
2. It looks through the `urlpatterns` list in order
3. When it finds a matching pattern, Django calls the associated view function
4. The view processes the request and returns a response

## Top-Level URLs Configuration

The main `urls.py` file lives in your project directory (`mysite/mysite/urls.py`). This is the entry point for all URL routing in your Django project.

### Example: Our Project's Root URLs

```python
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import Home

urlpatterns = [
    path("", Home.as_view(), name="home"),
    path("news/", include("news.urls")),
    path("admin/", admin.site.urls),
]

# Serve static and media files during development
if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT,
    )
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
```

### Breaking Down the Root URLs

- `path("", Home.as_view(), name="home")` - Maps the root URL (`/`) to a Home class-based view
- `path("news/", include("news.urls"))` - Includes all URL patterns from the news app. Any URL starting with `/news/` will be handled by `news.urls`
- `path("admin/", admin.site.urls)` - Provides access to Django's admin interface at `/admin/`

The `static()` helper function at the bottom helps Django serve static files (CSS, JavaScript) and media files (uploaded content) during development.

## Including App-Specific URLs

Using `include()` allows you to keep your URL configurations modular and organized. When you include an app's URLs, Django forwards the remaining part of the URL to that app's URLconf.

### Example: Including the News App

```python
path("news/", include("news.urls"))
```

This line tells Django: "For any URL that starts with `news/`, look in the `news.urls` module for more URL patterns."

**How it works:**
- A request to `/news/` → forwarded to news app's URLs
- A request to `/news/5/` → forwarded to news app's URLs as `5/`

## App-Specific URLs

Each Django app can have its own `urls.py` file. This keeps URL configurations modular and makes apps more reusable.

### Example: News App URLs

In `mysite/news/urls.py`:

```python
from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:pk>/', views.detail, name='detail'),
]
```

### Breaking Down the News App URLs

**`app_name = 'news'`**
- Creates a namespace for these URLs
- Prevents naming conflicts between apps
- Used when reversing URLs: `{% url 'news:index' %}` or `reverse('news:index')`

**`path('', views.index, name='index')`**
- Matches `/news/` (empty string after `news/`)
- Calls the `index` function from `views.py`
- Named 'index' for URL reversing

**`path('<int:pk>/', views.detail, name='detail')`**
- Matches URLs like `/news/1/`, `/news/42/`, etc.
- `<int:pk>` is a path converter that captures an integer and passes it as a keyword argument `pk` to the view
- The `pk` parameter will be available in the view function: `def detail(request, pk):`

## URL Path Converters

Django provides several built-in path converters for capturing URL parameters:

| Converter | Matches | Example |
|-----------|---------|---------|
| `str`     | Any non-empty string (excluding `/`) | `<str:username>` matches "john" |
| `int`     | Zero or any positive integer | `<int:id>` matches "42" |
| `slug`    | Any slug string (letters, numbers, hyphens, underscores) | `<slug:article>` matches "my-article" |
| `uuid`    | A UUID string | `<uuid:id>` matches "075194d3-6885-417e-a8a8-6c931e272f00" |
| `path`    | Any non-empty string (including `/`) | `<path:filepath>` matches "dir/file.txt" |

### Example Usage

```python
urlpatterns = [
    path('', views.index, name='index'),                      # /news/
    path('<int:pk>/', views.detail, name='detail'),           # /news/5/
    path('author/<str:name>/', views.author, name='author'),  # /news/author/jane/
    path('category/<slug:slug>/', views.category, name='category'),  # /news/category/tech/
]
```

## Naming URL Patterns

Every URL pattern should have a `name` parameter. This allows you to refer to URLs by name instead of hardcoding paths.

### Benefits of Named URLs

1. **Flexibility**: Change the URL structure without breaking links throughout your code
2. **Maintainability**: Update URLs in one place
3. **Clarity**: Makes code more readable

### Using Named URLs in Templates

```html
<!-- Instead of hardcoding: -->
<a href="/news/">News</a>
<a href="/news/5/">Article 5</a>

<!-- Use named URLs: -->
<a href="{% url 'news:index' %}">News</a>
<a href="{% url 'news:detail' pk=5 %}">Article 5</a>
```

### Using Named URLs in Views

```python
from django.shortcuts import reverse, redirect

# Reverse a URL by name
url = reverse('news:index')  # Returns '/news/'
url = reverse('news:detail', kwargs={'pk': 5})  # Returns '/news/5/'

# Redirect to a named URL
return redirect('news:index')
return redirect('news:detail', pk=5)
```

## URL Resolution Order

Django processes URL patterns in the order they appear in `urlpatterns`. The first pattern that matches wins.

**Important:** Place more specific patterns before generic ones.

```python
# ✅ Correct order
urlpatterns = [
    path('create/', views.create, name='create'),      # Specific
    path('<int:pk>/', views.detail, name='detail'),    # Generic
]

# ❌ Wrong order
urlpatterns = [
    path('<int:pk>/', views.detail, name='detail'),    # Will match 'create' as <int:pk>
    path('create/', views.create, name='create'),      # Never reached!
]
```

## Best Practices

1. **Use `include()` for app URLs** - Keep your project modular
2. **Always name your URLs** - Makes maintenance easier
3. **Use namespaces** - Set `app_name` in app URLconfs to avoid conflicts
4. **Order matters** - Place specific patterns before generic ones
5. **Keep URLs clean** - Use meaningful, RESTful URL structures
6. **Use path converters** - They provide validation and type conversion automatically

## Summary

In our news example:
- The root `mysite/mysite/urls.py` includes the news app at the `/news/` path
- The news app's `urls.py` defines two patterns:
  - `/news/` → shows list of news articles
  - `/news/<id>/` → shows detail of a specific article
- URL names allow flexible referencing throughout templates and views
- Namespaces prevent conflicts between apps with similar URL names
