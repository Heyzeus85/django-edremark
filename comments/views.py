from django.http import Http404
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets

from .serializers import OptionSerializer

from .models import Option
from .forms import OptionForm

def index(request):
    return render(request, 'comments/index.html')

def calc_nologin(request):
    options = Option.objects.filter(owner='1')
    context = {'options': options}
    return render(request, 'comments/calc_nologin.html', context)

@login_required
def calc_login(request):
    default_options = Option.objects.filter(owner='1')
    user_options = Option.objects.filter(owner=request.user)
    options = default_options|user_options
    context = {'options': options}
    return render(request, 'comments/calc_login.html', context)

@login_required
def default_options(request):
    default_options = Option.objects.filter(owner='1')
    context = {'default_options': default_options}
    return render(request, 'comments/default_options.html', context)

@login_required
def default_option(request, option_id):
    option = Option.objects.get(id=option_id)
    if option.owner != request.user:
        raise Http404
    context = {'option': option}
    return render(request, 'comments/default_option.html', context)

@login_required
def options(request):
    options = Option.objects.filter(owner=request.user)
    context = {'options': options}
    return render(request, 'comments/options.html', context)

@login_required
def option(request, option_id):
    option = Option.objects.get(id=option_id)
    if option.owner != request.user:
        raise Http404
    context = {'option': option}
    return render(request, 'comments/option.html', context)

@login_required
def new_option(request):
    if request.method != 'POST':
        form = OptionForm()
    else:
        form = OptionForm(data=request.POST)
        if form.is_valid():
            new_option = form.save(commit=False)
            new_option.owner = request.user
            new_option.save()
            return redirect('comments:options')
    
    context = {'form': form}
    return render(request, 'comments/new_option.html', context)

@login_required
def edit_option(request, option_id):
    option = Option.objects.get(id=option_id)

    if option.owner != request.user:
        raise Http404

    if request.method != 'POST':
        form = OptionForm(instance=option)
    else:
        form = OptionForm(instance=option, data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('comments:option', option_id=option.id)
    
    context = {'option': option, 'form': form}
    return render(request, 'comments/edit_option.html', context)

@login_required
def delete_option(request, option_id):
    option = get_object_or_404(Option, id=option_id)

    if request.method == 'POST':
        option.delete()
        return redirect('comments:options')
    
    context = {'option': option}
    return render(request, 'comments/delete_option.html', context)

@login_required
def how_to(request):
    return render(request, 'comments/how_to.html')

class OptionView(viewsets.ModelViewSet):
    serializer_class = OptionSerializer
    queryset = Option.objects.all()

