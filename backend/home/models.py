from django.conf import settings
from django.db import models
class Mod1(models.Model):
    'Generated Model'
    val1 = models.BigIntegerField()
    val2 = models.DecimalField(null=True,blank=True,max_digits=30,decimal_places=10,)
    val3 = models.CharField(null=True,blank=True,max_length=55,)
class Safehouse(models.Model):
    'Generated Model'
    l1 = models.BigIntegerField()
    l2 = models.CharField(max_length=255,null=True,blank=True,)
    l3 = models.BinaryField(null=True,blank=True,)
    llkkjhhhsdajvvasdbjouoiyewryusddcnvkvhfzdsdjhbkcdchdscgsd = models.SlugField(max_length=50,null=True,blank=True,)
