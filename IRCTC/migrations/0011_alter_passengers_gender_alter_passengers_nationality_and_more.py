# Generated by Django 4.1.4 on 2022-12-30 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IRCTC', '0010_alter_passengers_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passengers',
            name='gender',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AlterField(
            model_name='passengers',
            name='nationality',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AlterField(
            model_name='passengers',
            name='preference',
            field=models.CharField(default='', max_length=25),
        ),
    ]
