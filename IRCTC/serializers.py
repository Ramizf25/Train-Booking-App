from rest_framework import serializers
from .models import User, Gender, Nationality, Trains, Status, Bookings, Preference,Passengers

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
"""
Passenger Details
"""
class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passengers
        fields = '__all__'
class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = '__all__'