---
title: Getting Started with Django
permalink: /django/intro
layout: django
---

# Getting Started with Django

If you have no previous experience with python then start by looking at
[getting started with python](https://www.python.org/about/gettingstarted/)

## 1. Create a Virtual Environment

Creating a virtual environment keeps your project dependencies isolated from
your system Python installation.

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

## 2. Install Dependencies

With the virtual environment activated, install the required packages from `requirements.txt`:

```bash
pip install -r requirements.txt
```

This will install Django and any other dependencies specified in the requirements file.

## 3. Run the Development Server

Start the Django development server:

```bash
# Navigate to the mysite directory
cd mysite

# Run the development server
python manage.py runserver
```

The development server will start on `http://127.0.0.1:8000/` by default. You
should see output indicating the server is running.

To stop the server, press `Ctrl+C` in the terminal.

## Additional Commands

```bash
# Create database migrations after model changes
python manage.py makemigrations

# Apply migrations to the database
python manage.py migrate

# Create a superuser for the admin interface
python manage.py createsuperuser
```
