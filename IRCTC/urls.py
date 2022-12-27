from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, GenderViewSet, NationalityViewSet,TrainsViewSet,StatusViewSet,BookingsViewSet,PassengerViewSet\
    ,PreferenceViewSet


router = DefaultRouter()
router.register('user',UserViewSet)
router.register('gender',GenderViewSet)
router.register('nationality',NationalityViewSet)
router.register('trains',TrainsViewSet)
router.register('status',StatusViewSet)
router.register('booking',BookingsViewSet)
router.register('passenger-details',PassengerViewSet)
router.register('preference',PreferenceViewSet)

urlpatterns = [
    path('', include(router.urls))
    ]