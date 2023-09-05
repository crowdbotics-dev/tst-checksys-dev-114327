from django.conf import settings
from django.db import models
class Mod1(models.Model):
    'Generated Model'
    val1 = models.BigIntegerField()
    val2 = models.DecimalField(max_digits=30,decimal_places=10,null=True,blank=True,)
    val3 = models.CharField(max_length=55,null=True,blank=True,)
