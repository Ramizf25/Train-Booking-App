# Generated by Django 4.1.4 on 2022-12-27 10:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('IRCTC', '0003_alter_status_status_choice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookings',
            name='status',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='IRCTC.status'),
        ),
    ]
