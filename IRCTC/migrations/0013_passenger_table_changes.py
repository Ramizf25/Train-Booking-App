# Generated by Django 4.1.4 on 2023-01-03 06:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('IRCTC', '0012_trains_time.py'),
    ]

    operations = [
        migrations.AddField(
            model_name='passengers',
            name='booking_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='IRCTC.bookings'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='passengers',
            name='class_AC_Sleeper',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AddField(
            model_name='passengers',
            name='quota_general_tatkal',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AddField(
            model_name='trains',
            name='departure',
            field=models.CharField(default='', max_length=16),
        ),
    ]
