---
title: Understanding Django Models
permalink: /django/models
layout: django
---

# Understanding Django Models and Views

Models are Python classes that define the structure of your database tables.
Each model maps to a single database table and defines the fields and behaviors
of the data you're storing.

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