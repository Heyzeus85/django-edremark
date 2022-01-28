from django.urls import path

from . import views

app_name = 'comments'
urlpatterns = [
    path('', views.index, name='index'),
    path('default_options/', views.default_options, name='default_options'),
    path('default_option/', views.default_option, name='default_option'),
    path('options/', views.options, name='options'),
    path('options/<int:option_id>/', views.option, name='option'),
    path('new_option/', views.new_option, name='new_option'),
    path('edit_option/<int:option_id>/', views.edit_option, name='edit_option'),
    path('delete_option/<int:option_id>/', views.delete_option, name='delete_option'),
    path('calc_nologin/', views.calc_nologin, name='calc_nologin'),
    path('calc_login', views.calc_login, name='calc_login'),
    path('how_to/', views.how_to, name='how_to')
]