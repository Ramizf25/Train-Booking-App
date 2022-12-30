from django.db import models

# Create your models here.
"""
User
"""
class Gender(models.Model):
    gender_choice = models.CharField(max_length=16, unique=True,default="Gender")
    def __str__(self):
        return self.gender_choice
class Nationality(models.Model):
    nationality_choice = models.CharField(max_length=16, unique=True, default="India")
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
    
    def __str__(self):
        return self.username
"""
Trains
"""
class Trains(models.Model):

    train_no = models.IntegerField()
    train_name = models.CharField(max_length=25)
    departure = models.CharField(max_length=16, default='')
    arrival = models.CharField(max_length=16, default='')
    date = models.DateField()
    seats_AC_general = models.IntegerField(default=0)
    seats_Sleeper_general = models.IntegerField(default=0)
    seats_AC_senior = models.IntegerField(default=0)
    seats_Sleeper_senior = models.IntegerField(default=0)
    seats_AC_general_tatkal = models.IntegerField(default=0)
    seats_Sleeper_general_tatkal = models.IntegerField(default=0)
    seats_AC_senior_tatkal = models.IntegerField(default=0)
    seats_Sleeper_senior_tatkal = models.IntegerField(default=0)
    
    def __str__(self):
        return self.train_name



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
    status = models.ForeignKey(Status, on_delete=models.CASCADE, default="")

    def __str__(self):
        return self.id

"""
Passenger Details
"""
class Preference(models.Model):
    preference_choice = models.CharField(max_length=19, unique=True, default="No Preference",editable=True)

    def __str__(self):
        return self.preference_choice

class Passengers(models.Model):
    name = models.CharField(max_length=25, default="Passenger Name")
    age = models.CharField(max_length=25,default="Age", editable=True)
    gender = models.CharField(max_length=25, default="")
    nationality = models.CharField(max_length=25, default="")
    preference = models.CharField(max_length=25, default="")

    def __str__(self):
        return self.train_name


