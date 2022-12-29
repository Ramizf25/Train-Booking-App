# Generated by Django 4.1.4 on 2022-12-29 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IRCTC', '0007_alter_gender_gender_choice_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trains',
            name='seats_AC',
        ),
        migrations.RemoveField(
            model_name='trains',
            name='seats_Sleeper',
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_AC_general',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_AC_general_tatkal',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_AC_senior',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_AC_senior_tatkal',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_Sleeper_general',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_Sleeper_general_tatkal',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_Sleeper_senior',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trains',
            name='seats_Sleeper_senior_tatkal',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='passengers',
            name='age',
            field=models.CharField(default='Age', max_length=25),
        ),
        migrations.AlterField(
            model_name='preference',
            name='preference_choice',
            field=models.CharField(default='No Preference', max_length=19, unique=True),
        ),
    ]
