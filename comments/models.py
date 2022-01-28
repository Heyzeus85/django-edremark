from django.db import models
from django.contrib.auth.models import User

KIND_CHOICES = (
    ('strength', 'STRENGTH'),
    ('improve', 'IMPROVE'),
    ('recommend', 'RECOMMEND'),
)

class Option(models.Model):
    name = models.CharField(max_length=500, default='e.g. Kindness')
    kind = models.CharField(max_length=9, choices=KIND_CHOICES, default='strength')
    text = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

