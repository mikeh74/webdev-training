# Main Project

The previous exercises were intended to build knowledge and skills in the fundamental building blocks of the web. Now using those skills you should be able to take a set of requirements and build out the related UI.

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

[Django Docs](https://docs.djangoproject.com/en/5.2/)

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
