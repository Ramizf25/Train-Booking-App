from django.db import models

# Create your models here.
"""
User
"""
class Gender(models.Model):
    gender_choice = models.CharField(max_length=16, unique=True)
    def __str__(self):
        return self.gender_choice
class Nationality(models.Model):
    nationality_choice = models.CharField(max_length=16, unique=True)
    def __str__(self):
        return self.nationality_choice

class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE,default="")
    username = models.CharField(max_length=16, unique=True)
    password = models.CharField(max_length=16)
    dob = models.DateField()
    email = models.EmailField()
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE,default="")

"""
Trains
"""
class Trains(models.Model):
    train_no = models.IntegerField()
    train_name = models.CharField(max_length=25)
    date = models.DateField()
    seats_AC = models.IntegerField()
    seats_Sleeper = models.IntegerField()

"""
Bookings
"""
class Status(models.Model):
    status_choice = models.CharField(max_length=12,unique=True, default="")
    def __str__(self):
        return self.status_choice
class Bookings(models.Model):
    id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    train = models.ForeignKey(Trains,on_delete=models.CASCADE)
    status = models.ForeignKey(Status, null=True, blank=True, db_index=True,on_delete=models.CASCADE)





