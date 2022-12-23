from rest_framework import serializers
from .models import User,Gender,Nationality,Trains,Status,Bookings

"""
User
"""
class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'
class NationalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Nationality
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

"""
Trains
"""
class TrainsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trains
        fields = '__all__'
"""
Bookings
"""
class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'
class BookingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookings
        fields = '__all__'