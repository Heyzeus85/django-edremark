from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from comments import views

router = routers.DefaultRouter()
router.register(r'options', views.OptionView, 'option')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('comments.urls')),
    path('users/', include('users.urls')),
    path('api/', include(router.urls)),
]

