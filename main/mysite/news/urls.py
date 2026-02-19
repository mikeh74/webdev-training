from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [
  path('', views.NewsArticleListView.as_view(), name='index'),
  path('<int:pk>/', views.NewsArticleDetailView.as_view(), name='detail'),
  # path('create/', views.create, name='create'),
  # path('<int:pk>/update/', views.update, name='update'),
  # path('<int:pk>/delete/', views.delete, name='delete'),
]
