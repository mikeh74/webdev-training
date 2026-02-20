# Django Project Structure

When you create a new Django project using `django-admin startproject mysite`, 
Django generates a default directory structure with essential configuration
files. Understanding this structure is crucial for effective Django development.

## Project-Level Structure

At the top level of the project we have the following file structure

```
mysite/
├── manage.py
├── mysite/
|   ├── __init__.py
|   ├── settings.py
|   ├── views.py
|   ├── urls.py
|   ├── asgi.py
|   └── wsgi.py
└── news (see app section below)
```

**Key Files Explained:**

* **`manage.py`**: A command-line utility that lets you interact with your
Django project. Use it to run the development server, create apps, run
migrations, and more.

* **`mysite/__init__.py`**: An empty file that tells Python this directory
should be treated as a Python package.

* **`mysite/settings.py`**: The central configuration file for your Djangoproject. Contains settings for:
  * Database configuration
  * Installed apps
  * Middleware
  * Static files and media
  * Security settings
  * Template configuration

* **`mysite/urls.py`**: The main URL routing file. This is the entry point for
all URL patterns in your project. You can include URL patterns from individual
apps here.

* **`mysite/views.py`**: Optional project-level views for simple pages or
redirects. You can place shared views here, though most views live in
individual apps.

* **`mysite/wsgi.py`**: WSGI (Web Server Gateway Interface) configuration for
deploying your project to production servers.

* **`mysite/asgi.py`**: ASGI (Asynchronous Server Gateway Interface)
configuration for deploying asynchronous features and WebSocket support.

## App-Level Structure

The news folder is what Django considers to be an app, an app in Django is a
self-contained component that bundles related models, views, templates,
and other functionality for a specific feature.

```
news/
├── __init__.py
├── admin.py
├── apps.py
├── models.py
├── tests.py
├── views.py
├── tests.py
├── views.py
├── templates
|   └── news
|       ├── index.html
|       └── detail.html
└── migrations/
    ├── __init__.py
    └── 0001_initial.py
```

**App Files Explained:**

* **`admin.py`**: Register your models here to make them available in the
Django admin interface.

* **`apps.py`**: Configuration file for the app. Contains metadata about the
application.

* **`models.py`**: Define your database models (data structure) here. Each
model maps to a database table.

* **`views.py`**: Contains view functions or classes that handle web requests
and return responses.

* **`tests.py`**: Write unit tests for your app here to ensure code quality.

* **`migrations/`**: Directory where Django stores database migration files.
These track changes to your models over time.

## Additional Files You'll Create

As you develop your project, you'll typically also add:

* **`templates/`**: Directory for HTML template files (can be at project or app level)
* **`static/`**: Directory for static files like CSS, JavaScript, and images
* **`media/`**: Directory for user-uploaded files
* **`urls.py`** (in app): URL patterns specific to the app
* **`forms.py`**: Django form definitions for handling user input

## Key Principles

1. **Project vs App**: A Django project can contain multiple apps. Each app
should have a single, clear purpose.

2. **Separation of Concerns**: Keep code organized by functionality (models,
views, templates, etc.)

3. **Reusability**: Apps should be self-contained and potentially reusable
in other projects.
