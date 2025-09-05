from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)

    nivel = models.IntegerField(blank=True, null=True, default=1)

    seguidores = models.ManyToManyField('self', symmetrical=False, related_name='seguindo', blank=True)

    ultima_atividade = models.DateTimeField(auto_now=True)

class Wishlist(models.Model):
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE, related_name='wishlists')
    perfume = models.ForeignKey('perfumes.Perfume', on_delete=models.CASCADE, related_name='wishlist_usuarios')
    adicionado_em = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'perfume')
