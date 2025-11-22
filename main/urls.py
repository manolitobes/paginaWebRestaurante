from django.urls import path
from .views import inicio

urlpatterns = [
    path('index/', inicio, name='inicio')
]
