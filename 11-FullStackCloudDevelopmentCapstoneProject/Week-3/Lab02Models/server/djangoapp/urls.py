from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

app_name = 'djangoapp'
urlpatterns = [
    # route is a string contains a URL pattern
    # view refers to the view function
    # name the URL

    # path for about view
    path(route='about', view=views.about, name="about"),

    # path for contact us view
    path(route='contact', view=views.contact, name="contact"),

    # path for registration
    path('registration', views.registration_request, name='registration'),

    # path for login
    path('login', views.login_request, name='login'),

    # path for logout
    path('logout', views.logout_request, name='logout'),

    # path for home, index page
    path(route='', view=views.get_dealerships, name='index'),

    # path for dealer reviews view

    # path for add a review view

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)