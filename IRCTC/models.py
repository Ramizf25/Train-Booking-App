from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    gender = models.CharField(choices=['MALE', 'FEMALE', 'DONT DISCLOSE'])
    username = models.CharField(max_length=16, unique=True)
    password = models.CharField(max_length=16)
    dob = models.DateField()
    email = models.EmailField()
    nationality = models.CharField(choices=['INDIAN', 'OTHERS'])

class Trains(models.model):
    train_no = models.IntegerField()
    train_name = models.CharField()
    date = models.DateField()
    seats_AC = models.IntegerField()
    seats_Sleeper = models.IntegerField()

class Bookings(models.Model):
    id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(User)
    train = models.ForeignKey(Trains)
    status = models.CharField(choices=['CONFIRMED', 'CANCELLED'])





