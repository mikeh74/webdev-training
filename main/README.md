# Main Project

The previous exercises were intended to build knowledge and skills in the fundamental building blocks of the web. Now using those skills you should be able to take a set of requirements and build out the related user interface (UI).

## Brief

The goal of this training is to run through learning the basics of web development and then design and build a web page which will show a list of news items and then a news detail page to display the news item.

Once this is complete then we will build out a backend solution using Django to store and serve these news stories.

## Getting Started with Django

### 1. Create a Virtual Environment

Creating a virtual environment keeps your project dependencies isolated from your system Python installation.

```bash
# Navigate to the django directory
cd django

# Create a virtual environment named 'venv'
python3 -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate

# On Windows:
# venv\Scripts\activate
```

When activated, you'll see `(venv)` in your terminal prompt.

*Resources:*
[Virtual Environments](https://docs.python.org/3/library/venv.html)

### 2. Install Dependencies

With the virtual environment activated, install the required packages from `requirements.txt`:

```bash
pip install -r requirements.txt
```

This will install Django and any other dependencies specified in the requirements file.

### 3. Run the Development Server

Start the Django development server:

```bash
# Navigate to the mysite directory
cd mysite

# Run the development server
python manage.py runserver
```

The development server will start on `http://127.0.0.1:8000/` by default. You should see output indicating the server is running.

To stop the server, press `Ctrl+C` in the terminal.

### Additional Commands

```bash
# Create database migrations after model changes
python manage.py makemigrations

# Apply migrations to the database
python manage.py migrate

# Create a superuser for the admin interface
python manage.py createsuperuser
```

### News Index page

The news index should have the following:
* a banner with an image and title with intro text
* left hand section showing a list of news categories
* right section with a grid of news stories with links to news detail pages
* each item in the list of news should contain the following:
** an image
** date of publication
** title

### News Detail page

Each news detail page should contain the following:
* an image
* title
* date of publication
* author name
* author image
* news article content
* related news section

## Planning

We need to break this project down into 3 main phases, these are as follows:
* create design flats
* build html and css from the flats
* build out a backend solution

## Understanding Django Models and Views

### Django Models

Models are Python classes that define the structure of your database tables. Each model maps to a single database table and defines the fields and behaviors of the data you're storing.

**Key Concepts to Learn:**

* **Model Fields**: Different types of fields like `CharField`, `TextField`, `DateTimeField`, `ImageField`, `ForeignKey`, etc.
* **Field Options**: Parameters like `max_length`, `blank`, `null`, `default`, `upload_to`
* **Relationships**: How to create relationships between models using `ForeignKey`, `ManyToManyField`, and `OneToOneField`
* **Meta Options**: Using the `Meta` class to define model behavior (ordering, verbose names, etc.)
* **Model Methods**: Adding custom methods like `__str__()` to represent your model instances

**For the News Project, you'll need models for:**

* **NewsCategory**: To store different news categories (e.g., Sports, Politics, Technology)
  * Fields: name, description, slug
* **Author**: To store author information
  * Fields: name, bio, profile_image, email
* **NewsArticle**: The main model for news stories
  * Fields: title, slug, content, publication_date, author (ForeignKey), category (ForeignKey), featured_image, excerpt, status (draft/published)
  * Methods: `get_absolute_url()` to generate URL for the detail page

**Example Model Structure:**

```python
from django.db import models

class NewsArticle(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    publication_date = models.DateTimeField()
    author = models.ForeignKey('Author', on_delete=models.CASCADE)
    # ... more fields
    
    def __str__(self):
        return self.title
```

**Resources to Study:**
* [Django Models Documentation](https://docs.djangoproject.com/en/5.2/topics/db/models/)
* [Model Field Reference](https://docs.djangoproject.com/en/5.2/ref/models/fields/)
* [Model Relationships](https://docs.djangoproject.com/en/5.2/topics/db/examples/)

### Django Views

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

### Connecting Models, Views, URLs, and Templates

**The Django Request/Response Flow:**

1. **URL Pattern**: User visits a URL (e.g., `/news/django-tutorial/`)
2. **URL Routing**: Django matches the URL to a pattern in `urls.py`
3. **View Called**: The matched pattern calls a view function/class
4. **Data Retrieval**: View queries the database using models
5. **Template Rendering**: View passes data to a template
6. **Response**: Template renders HTML and returns to the user

**Key Files to Work With:**

* `models.py`: Define your data structure
* `views.py`: Define your view logic
* `urls.py`: Map URLs to views
* `templates/`: Create HTML templates
* `admin.py`: Register models for the admin interface

### Next Steps for Implementation

1. **Design your models**: Plan out the fields and relationships you need
2. **Create migrations**: Run `makemigrations` and `migrate` to create database tables
3. **Register models in admin**: Add models to `admin.py` to manage them via Django admin
4. **Create test data**: Use the admin interface to add some sample news articles
5. **Build views**: Create views to display your news index and detail pages
6. **Configure URLs**: Set up URL patterns to route to your views
7. **Create templates**: Build HTML templates that receive and display data from views
8. **Test and iterate**: Run the server and test your functionality

## Resouces

[Server Side Programming](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps)
[Django Docs](https://docs.djangoproject.com/en/5.2/)
[MDN Django Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django)
