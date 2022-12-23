from django.shortcuts import render
from rest_framework import viewsets, status, mixins
from .models import User, Gender, Nationality, Trains,Status,Bookings
from .serializers import UserSerializer,GenderSerializer,NationalitySerializer,TrainsSerializer\
    ,StatusSerializer,BookingsSerializer
from rest_framework.response import Response
from rest_framework import filters
# Create your views here.

"""
User
"""
class GenderViewSet(viewsets.ModelViewSet):
    queryset = Gender.objects.all()
    serializer_class = GenderSerializer
class NationalityViewSet(viewsets.ModelViewSet):
    queryset = Nationality.objects.all()
    serializer_class = NationalitySerializer
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

"""
Trains
"""
class TrainsViewSet(viewsets.ModelViewSet):
    queryset = Trains.objects.all()
    serializer_class = TrainsSerializer
"""
Bookings
"""
class StatusViewSet(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
class BookingsViewSet(viewsets.ModelViewSet):
    queryset = Bookings.objects.all()
    serializer_class = BookingsSerializer