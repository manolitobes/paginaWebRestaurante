from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse
# Create your views here.
class Index(TemplateView):
    template_name = 'main/index.html'
    
def hello(request):
    return HttpResponse('hola mundo')