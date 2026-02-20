# Main Project

The previous exercises were intended to build knowledge and skills in the
fundamental building blocks of the web. Now using those skills you should be
able to take a set of requirements and build out the related user interface (UI).

## Brief

The goal of this training is to run through learning the basics of web
development and then design and build a web page which will show a list of
news items and then a news detail page to display the news item.

Once this is complete then we will build out a backend solution using Django
to store and serve these news stories.

### News Index page

The news index should have the following:
* [ ] a banner with an image and title with intro text
* [ ] left hand section showing a list of news categories
* [x] right section with a grid of news stories with links to news detail pages
* each item in the list of news should contain the following:
** an image
** date of publication
** title

### News Detail page

Each news detail page should contain the following:
* [x] an image
* [x] title
* [x] date of publication
* [x] author name
* [x] author image
* [x] news article content

## Planning

We need to break this project down into 3 main phases, these are as follows:
* create design flats
* build html and css from the flats
* build out a backend solution

## Creating design flats

To create the design flats you could use paper and pen, you could use a
dedicated software programme such as Photoshop, [Figma](https://www.figma.com)
or something like [Moqups](https://moqups.com) for wireframing.

Wireframing is a process of creating low-fidelity visual representations of a
web page or application layout. Think of it as a blueprint or skeleton of your
website that focuses on structure, content hierarchy, and functionality rather
than visual design details like colors, fonts, or images.

## Build HTML and CSS

The next step is generally for us to build out the HTML and associated CSS
before we start to look at the back end functionality. Sometimes that back and
front end development will happen in tandem and it is even possible to decouple
the back end development from the front end so that both can happen in isolation
but for our example we are going to build out the front end components first.

If you look in the front-end folder you will find 2 files:
* index.html - which will show a list of news articles.
* detail.html - which will show the details of a news article

## Django Backend

Once you have completed the designs for these 2 pages then we can look at
starting to build out the back end functionality. For our back end we are going
to be using [Django](https://www.djangoproject.com)

* [Project Structure](../docs/django/file_structure.md)
* [Introduction to Django](../docs/django/intro.md)
* [Models](../docs/django/models.md)
* [Views](../docs/django/views.md)
* [Routing](../docs/django/routing.md)

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
[MDN Django Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django)
[Django Docs](https://docs.djangoproject.com/en/5.2/)
